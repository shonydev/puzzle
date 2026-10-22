import React, { useState, useEffect, useCallback } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { GameHUD } from './components/GameHUD.tsx';
import { Tube as TubeComponent } from './components/Tube.tsx';
import { LevelSelectModal } from './components/LevelSelectModal.tsx';
import { WinModal } from './components/WinModal.tsx';
import { CustomLevelModal } from './components/CustomLevelModal.tsx';
import { HelpModal } from './components/HelpModal.tsx';
import { DownloadModal } from './components/DownloadModal.tsx';
import {
  LevelData,
  getLevel,
  getDailyChallenge,
  generateCustomGame,
} from './game/levels.ts';
import {
  Tube,
  canPour,
  executePour,
  isLevelWon,
  getValidMoves,
  solveWaterPuzzle,
  getPourAmount,
} from './game/engine.ts';
import { sound } from './game/audio.ts';
import {
  loadUserProgress,
  saveUserProgress,
  recordLevelVictory,
  UserProgress,
} from './game/storage.ts';

export default function App() {
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress());
  const [currentLevelData, setCurrentLevelData] = useState<LevelData>(() =>
    getLevel(userProgress.highestUnlockedLevel)
  );
  const [tubes, setTubes] = useState<Tube[]>(() =>
    currentLevelData.tubes.map((t) => [...t])
  );
  const [history, setHistory] = useState<Tube[][]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [extraTubesUsed, setExtraTubesUsed] = useState<number>(0);

  // Selection & Pouring Animation State
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [pourSource, setPourSource] = useState<number | null>(null);
  const [tiltAngle, setTiltAngle] = useState<number>(0);
  const [tiltDirection, setTiltDirection] = useState<'left' | 'right'>('right');

  // Hint State
  const [hintSource, setHintSource] = useState<number | null>(null);
  const [hintTarget, setHintTarget] = useState<number | null>(null);
  const [isSolvingHint, setIsSolvingHint] = useState<boolean>(false);

  // Modals
  const [isLevelSelectOpen, setIsLevelSelectOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [winStats, setWinStats] = useState({ moves: 0, targetMoves: 0, stars: 3 });

  // Settings
  const [soundEnabled, setSoundEnabled] = useState(userProgress.soundEnabled);
  const [symbolMode, setSymbolMode] = useState(userProgress.symbolMode);

  // Sync sound engine with state
  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  // Load a new level
  const loadLevel = useCallback(
    (levelData: LevelData) => {
      setCurrentLevelData(levelData);
      setTubes(levelData.tubes.map((t) => [...t]));
      setHistory([]);
      setMoves(0);
      setExtraTubesUsed(0);
      setSelectedIndex(null);
      setIsPouring(false);
      setPourSource(null);
      setHintSource(null);
      setHintTarget(null);
      setIsWinModalOpen(false);
    },
    []
  );

  // Restart current level
  const handleReset = useCallback(() => {
    sound.playSelect();
    loadLevel(currentLevelData);
  }, [currentLevelData, loadLevel]);

  // Undo move
  const handleUndo = useCallback(() => {
    if (history.length === 0 || isPouring) return;
    sound.playSelect();
    const previous = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setTubes(previous.map((t) => [...t]));
    setMoves((m) => Math.max(0, m - 1));
    setSelectedIndex(null);
    setHintSource(null);
    setHintTarget(null);
  }, [history, isPouring]);

  // Add extra empty tube
  const handleAddTube = useCallback(() => {
    if (extraTubesUsed >= 2 || isPouring) return;
    sound.playSelect();
    setHistory((prev) => [...prev, tubes.map((t) => [...t])]);
    setTubes((prev) => [...prev, []]);
    setExtraTubesUsed((prev) => prev + 1);
    setSelectedIndex(null);
    setHintSource(null);
    setHintTarget(null);
  }, [extraTubesUsed, isPouring, tubes]);

  // Hint solver
  const handleHint = useCallback(() => {
    if (isSolvingHint || isPouring) return;
    setIsSolvingHint(true);
    sound.playSelect();

    // Small async delay so UI updates before calculation
    setTimeout(() => {
      const solution = solveWaterPuzzle(tubes, 4, 15000);
      setIsSolvingHint(false);

      if (solution && solution.length > 0) {
        const nextMove = solution[0];
        setHintSource(nextMove.from);
        setHintTarget(nextMove.to);
      } else {
        // Fallback: Pick any valid legal move if deep BFS hit cutoff
        const validMoves = getValidMoves(tubes, 4);
        if (validMoves.length > 0) {
          setHintSource(validMoves[0].from);
          setHintTarget(validMoves[0].to);
        } else {
          sound.playError();
        }
      }
    }, 40);
  }, [isSolvingHint, isPouring, tubes]);

  // Tube click interaction
  const handleTubeClick = useCallback(
    (clickedIdx: number) => {
      if (isPouring) return;

      // Case 1: No tube currently selected
      if (selectedIndex === null) {
        const tube = tubes[clickedIdx];
        if (tube.length === 0) {
          // Can't select empty tube as source
          sound.playError();
          return;
        }

        // If tube is already fully completed with all identical colors, discourage picking it
        if (tube.length === 4 && tube.every((c) => c === tube[0])) {
          sound.playError();
          return;
        }

        // Select tube
        sound.playSelect();
        setSelectedIndex(clickedIdx);
        setHintSource(null);
        setHintTarget(null);
        return;
      }

      // Case 2: Clicked the same tube -> deselect
      if (selectedIndex === clickedIdx) {
        sound.playSelect();
        setSelectedIndex(null);
        return;
      }

      // Case 3: Clicked a different tube -> Attempt Pour
      const sourceIdx = selectedIndex;
      const targetIdx = clickedIdx;

      if (!canPour(tubes, sourceIdx, targetIdx, 4)) {
        // If target has liquid and is not empty, switch selection to that tube instead!
        const targetTube = tubes[targetIdx];
        if (
          targetTube.length > 0 &&
          !(targetTube.length === 4 && targetTube.every((c) => c === targetTube[0]))
        ) {
          sound.playSelect();
          setSelectedIndex(targetIdx);
        } else {
          sound.playError();
          setSelectedIndex(null);
        }
        return;
      }

      // Valid Pour!
      const amount = getPourAmount(tubes, sourceIdx, targetIdx, 4);
      const isRight = targetIdx > sourceIdx;

      // Trigger pour animation
      setIsPouring(true);
      setPourSource(sourceIdx);
      setTiltDirection(isRight ? 'right' : 'left');
      setTiltAngle(55);

      sound.playPour(amount);

      // Save history for Undo
      setHistory((prev) => [...prev, tubes.map((t) => [...t])]);

      setTimeout(() => {
        const result = executePour(tubes, sourceIdx, targetIdx, 4);
        if (result) {
          const nextTubes = result.nextTubes;
          setTubes(nextTubes);
          setMoves((m) => m + 1);

          // Check if target tube became complete
          const targetIsNowComplete =
            nextTubes[targetIdx].length === 4 &&
            nextTubes[targetIdx].every((c) => c === nextTubes[targetIdx][0]);
          if (targetIsNowComplete) {
            sound.playTubeComplete();
          }

          // Check Win Condition
          if (isLevelWon(nextTubes, 4)) {
            setTimeout(() => {
              const { stars } = recordLevelVictory(
                currentLevelData.id,
                moves + 1,
                currentLevelData.targetMoves
              );
              setUserProgress(loadUserProgress());
              setWinStats({
                moves: moves + 1,
                targetMoves: currentLevelData.targetMoves,
                stars,
              });
              sound.playWin();
              setIsWinModalOpen(true);
            }, 300);
          }
        }

        // Reset pour state
        setIsPouring(false);
        setPourSource(null);
        setSelectedIndex(null);
        setTiltAngle(0);
      }, 280);
    },
    [isPouring, selectedIndex, tubes, moves, currentLevelData]
  );

  // Toggle Accessibility / Symbol mode
  const handleToggleSymbols = () => {
    const nextVal = !symbolMode;
    setSymbolMode(nextVal);
    const updated = { ...userProgress, symbolMode: nextVal };
    setUserProgress(updated);
    saveUserProgress(updated);
  };

  // Toggle Sound
  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    const updated = { ...userProgress, soundEnabled: nextVal };
    setUserProgress(updated);
    saveUserProgress(updated);
  };

  // Level advance from Win modal
  const handleNextLevel = () => {
    if (currentLevelData.id > 0 && currentLevelData.id < 100) {
      const nextLvl = getLevel(currentLevelData.id + 1);
      loadLevel(nextLvl);
    }
  };

  // Select level by ID
  const handleSelectLevel = (levelId: number) => {
    const lvl = getLevel(levelId);
    loadLevel(lvl);
  };

  // Start daily challenge
  const handleStartDaily = () => {
    const daily = getDailyChallenge();
    loadLevel(daily);
  };

  // Start custom game
  const handleStartCustom = (colorCount: number, emptyCount: number) => {
    const custom = generateCustomGame(colorCount, emptyCount);
    loadLevel(custom);
  };

  // Check for Stalemate (Deadlock)
  const isWon = isLevelWon(tubes, 4);
  const possibleMoves = isWon ? [] : getValidMoves(tubes, 4);
  const isStalemate = !isWon && possibleMoves.length === 0;

  // Split tubes into 1 or 2 rows for optimal presentation
  const totalTubes = tubes.length;
  let topRow: { tube: Tube; originalIdx: number }[] = [];
  let bottomRow: { tube: Tube; originalIdx: number }[] = [];

  if (totalTubes <= 6) {
    topRow = tubes.map((tube, idx) => ({ tube, originalIdx: idx }));
  } else {
    const half = Math.ceil(totalTubes / 2);
    topRow = tubes.slice(0, half).map((tube, idx) => ({ tube, originalIdx: idx }));
    bottomRow = tubes.slice(half).map((tube, idx) => ({
      tube,
      originalIdx: idx + half,
    }));
  }

  return (
    <div className="app-viewport bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-900">
      {/* Universal Top Bar (1 row, 3 zones) */}
      <TopBar
        onOpenLevels={() => setIsLevelSelectOpen(true)}
        onOpenDaily={handleStartDaily}
        onOpenCustom={() => setIsCustomModalOpen(true)}
        onOpenHelp={() => setIsHelpModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        symbolMode={symbolMode}
        onToggleSymbols={handleToggleSymbols}
        currentLevelName={currentLevelData.name}
      />

      {/* Main Game Arena */}
      <main className="game-main flex-1 min-h-0 flex flex-col justify-between max-w-5xl mx-auto w-full pb-2">
        {/* Game HUD (Moves, Level Title, Controls) */}
        <GameHUD
          levelTitle={currentLevelData.name}
          difficulty={currentLevelData.difficulty}
          colorCount={currentLevelData.colorCount}
          emptyCount={currentLevelData.emptyCount}
          moves={moves}
          targetMoves={currentLevelData.targetMoves}
          canUndo={history.length > 0 && !isPouring}
          isStalemate={isStalemate}
          onUndo={handleUndo}
          onReset={handleReset}
          onHint={handleHint}
          onAddTube={handleAddTube}
          isSolvingHint={isSolvingHint}
          extraTubesUsed={extraTubesUsed}
        />

        {/* Play Area: Tube Tray */}
        <section
          aria-label="Tablero de juego de tubos de ensayo"
          className="game-play-area flex-1 min-h-0 px-1 sm:px-6 flex flex-col items-center justify-center gap-2 sm:gap-6 overflow-hidden"
        >
          {/* Row 1 */}
          <div className="tube-row flex flex-nowrap items-end justify-center gap-x-[clamp(3px,1.5vw,12px)] gap-y-1 w-full">
            {topRow.map(({ tube, originalIdx }) => (
              <TubeComponent
                key={`tube-${originalIdx}`}
                index={originalIdx}
                colors={tube}
                isSelected={selectedIndex === originalIdx}
                isHintSource={hintSource === originalIdx}
                isHintTarget={hintTarget === originalIdx}
                isPouringSource={isPouring && pourSource === originalIdx}
                tiltAngle={tiltAngle}
                tiltDirection={tiltDirection}
                symbolMode={symbolMode}
                onClick={() => handleTubeClick(originalIdx)}
                disabled={isPouring}
              />
            ))}
          </div>

          {/* Row 2 (if > 6 tubes) */}
          {bottomRow.length > 0 && (
            <div className="tube-row flex flex-nowrap items-end justify-center gap-x-[clamp(3px,1.5vw,12px)] gap-y-1 w-full pt-1">
              {bottomRow.map(({ tube, originalIdx }) => (
                <TubeComponent
                  key={`tube-${originalIdx}`}
                  index={originalIdx}
                  colors={tube}
                  isSelected={selectedIndex === originalIdx}
                  isHintSource={hintSource === originalIdx}
                  isHintTarget={hintTarget === originalIdx}
                  isPouringSource={isPouring && pourSource === originalIdx}
                  tiltAngle={tiltAngle}
                  tiltDirection={tiltDirection}
                  symbolMode={symbolMode}
                  onClick={() => handleTubeClick(originalIdx)}
                  disabled={isPouring}
                />
              ))}
            </div>
          )}
        </section>

        {/* Subtle Tray / Bench Base Line */}
        <div className="game-footer w-full max-w-2xl mx-auto px-4">
          <div className="h-1.5 w-full bg-slate-300/80 dark:bg-slate-800 rounded-full shadow-inner" />
          <div className="mt-3 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span>Toca un tubo para levantarlo y otro para verter</span>
            <span aria-hidden="true">·</span>
            <span>Usa Pista si necesitas orientación</span>
          </div>
        </div>
      </main>

      {/* Modals */}
      <LevelSelectModal
        isOpen={isLevelSelectOpen}
        onClose={() => setIsLevelSelectOpen(false)}
        onSelectLevel={handleSelectLevel}
        currentLevelId={currentLevelData.id}
        userProgress={userProgress}
      />

      <WinModal
        isOpen={isWinModalOpen}
        levelId={currentLevelData.id}
        moves={winStats.moves}
        targetMoves={winStats.targetMoves}
        stars={winStats.stars}
        onNextLevel={handleNextLevel}
        onReplay={handleReset}
        onOpenLevelSelect={() => {
          setIsWinModalOpen(false);
          setIsLevelSelectOpen(true);
        }}
      />

      <CustomLevelModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onStartCustomGame={handleStartCustom}
      />

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
