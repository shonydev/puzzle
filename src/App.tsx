import React, { useState, useEffect, useCallback } from 'react';
import { MoreHorizontal, X } from 'lucide-react';
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
import { rowSizes, useBoardLayout } from './game/boardLayout.ts';
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
  const { ref: boardRef, layout: boardLayout } = useBoardLayout<HTMLElement>(tubes.length);
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Balance rows using the measured available space, maximizing tube size.
  const totalTubes = tubes.length;
  const sizes = rowSizes(totalTubes, boardLayout?.rows ?? Math.ceil(totalTubes / 6));
  const tubeRows: { tube: Tube; originalIdx: number }[][] = [];
  let cursor = 0;
  for (const size of sizes) {
    tubeRows.push(
      tubes.slice(cursor, cursor + size).map((tube, offset) => ({
        tube,
        originalIdx: cursor + offset,
      }))
    );
    cursor += size;
  }
  const boardStyle = (
    boardLayout
      ? {
          '--tube-w': `${boardLayout.tubeW}px`,
          '--tube-h': `${boardLayout.tubeH}px`,
          '--cell-w': `${boardLayout.cellW}px`,
          '--board-gap-x': `${boardLayout.gapX}px`,
          '--board-gap-y': `${boardLayout.gapY}px`,
          '--board-pad-x': `${boardLayout.padX}px`,
          '--board-pad-y': `${boardLayout.padY}px`,
        }
      : {}
  ) as React.CSSProperties;

  return (
    <div className="app-viewport bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-900">
      <header className="game-topbar flex items-center justify-between px-4 shrink-0">
        <span className="font-bold tracking-tight text-slate-900 dark:text-white text-lg">AquaSort</span>
        <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="game-menu-trigger" aria-label="Menú del juego" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X size={24} /> : <MoreHorizontal size={26} />}
        </button>
      </header>

      {isMenuOpen && (
        <div className="game-menu-backdrop" onClick={() => setIsMenuOpen(false)}>
          <section className="game-menu-panel" role="dialog" aria-modal="true" aria-label="Menú del juego" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <strong>Menú del juego</strong>
              <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú"><X size={20} /></button>
            </div>
            <div className="game-menu-links">
              <button onClick={() => { setIsLevelSelectOpen(true); setIsMenuOpen(false); }}>Elegir nivel</button>
              <button onClick={() => { handleStartDaily(); setIsMenuOpen(false); }}>Desafío diario</button>
              <button onClick={() => { setIsCustomModalOpen(true); setIsMenuOpen(false); }}>Partida libre</button>
              <button onClick={() => { handleToggleSound(); }}>Sonido: {soundEnabled ? 'activado' : 'desactivado'}</button>
              <button onClick={() => { handleToggleSymbols(); }}>Alternar símbolos</button>
              <button onClick={() => { setIsHelpModalOpen(true); setIsMenuOpen(false); }}>Cómo jugar</button>
              <button onClick={() => { setIsDownloadModalOpen(true); setIsMenuOpen(false); }}>Instalar / Descargar</button>
            </div>
            <div className="game-menu-stats">
              <div><strong>{currentLevelData.name}</strong><span>{currentLevelData.colorCount} colores · {currentLevelData.emptyCount + extraTubesUsed} tubos libres</span><span>Movimientos: {moves} / objetivo ~{currentLevelData.targetMoves}</span></div>
              <div className="game-menu-actions">
                <button disabled={history.length === 0 || isPouring} onClick={() => { handleUndo(); setIsMenuOpen(false); }}>Deshacer</button>
                <button onClick={() => { handleReset(); setIsMenuOpen(false); }}>Reiniciar</button>
                <button disabled={isSolvingHint} onClick={() => { handleHint(); setIsMenuOpen(false); }}>Pista</button>
                <button disabled={extraTubesUsed >= 2} onClick={() => { handleAddTube(); setIsMenuOpen(false); }}>+1 tubo</button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Main Game Arena */}
      <main className="game-main flex-1 min-h-0 flex flex-col justify-between max-w-5xl mx-auto w-full pb-2">
        {/* Play Area: Tube Tray */}
        <section
          ref={boardRef}
          aria-label="Tablero de juego de tubos de ensayo"
          className="game-play-area"
          style={boardStyle}
        >
          {tubeRows.map((row, rowIndex) => (
            <div className="tube-row flex flex-nowrap items-end justify-center w-full" key={`tube-row-${rowIndex}`}>
              {row.map(({ tube, originalIdx }) => (
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
          ))}
        </section>

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
