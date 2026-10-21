const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useCallback = __vite__cjsImport0_react["useCallback"];const _jsxDEV = __vite__cjsImport13_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { TopBar } from "/src/components/TopBar.tsx";
import { GameHUD } from "/src/components/GameHUD.tsx";
import { Tube as TubeComponent } from "/src/components/Tube.tsx";
import { LevelSelectModal } from "/src/components/LevelSelectModal.tsx";
import { WinModal } from "/src/components/WinModal.tsx";
import { CustomLevelModal } from "/src/components/CustomLevelModal.tsx";
import { HelpModal } from "/src/components/HelpModal.tsx";
import { DownloadModal } from "/src/components/DownloadModal.tsx";
import { getLevel, getDailyChallenge, generateCustomGame } from "/src/game/levels.ts";
import { canPour, executePour, isLevelWon, getValidMoves, solveWaterPuzzle, getPourAmount } from "/src/game/engine.ts";
import { sound } from "/src/game/audio.ts";
import { loadUserProgress, saveUserProgress, recordLevelVictory } from "/src/game/storage.ts";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport13_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export default function App() {
	const [userProgress, setUserProgress] = useState(loadUserProgress());
	const [currentLevelData, setCurrentLevelData] = useState(() => getLevel(userProgress.highestUnlockedLevel));
	const [tubes, setTubes] = useState(() => currentLevelData.tubes.map((t) => [...t]));
	const [history, setHistory] = useState([]);
	const [moves, setMoves] = useState(0);
	const [extraTubesUsed, setExtraTubesUsed] = useState(0);
	// Selection & Pouring Animation State
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [isPouring, setIsPouring] = useState(false);
	const [pourSource, setPourSource] = useState(null);
	const [tiltAngle, setTiltAngle] = useState(0);
	const [tiltDirection, setTiltDirection] = useState("right");
	// Hint State
	const [hintSource, setHintSource] = useState(null);
	const [hintTarget, setHintTarget] = useState(null);
	const [isSolvingHint, setIsSolvingHint] = useState(false);
	// Modals
	const [isLevelSelectOpen, setIsLevelSelectOpen] = useState(false);
	const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
	const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
	const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
	const [isWinModalOpen, setIsWinModalOpen] = useState(false);
	const [winStats, setWinStats] = useState({
		moves: 0,
		targetMoves: 0,
		stars: 3
	});
	// Settings
	const [soundEnabled, setSoundEnabled] = useState(userProgress.soundEnabled);
	const [symbolMode, setSymbolMode] = useState(userProgress.symbolMode);
	// Sync sound engine with state
	useEffect(() => {
		sound.enabled = soundEnabled;
	}, [soundEnabled]);
	// Load a new level
	const loadLevel = useCallback((levelData) => {
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
	}, []);
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
	}, [
		extraTubesUsed,
		isPouring,
		tubes
	]);
	// Hint solver
	const handleHint = useCallback(() => {
		if (isSolvingHint || isPouring) return;
		setIsSolvingHint(true);
		sound.playSelect();
		// Small async delay so UI updates before calculation
		setTimeout(() => {
			const solution = solveWaterPuzzle(tubes, 4, 15e3);
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
	}, [
		isSolvingHint,
		isPouring,
		tubes
	]);
	// Tube click interaction
	const handleTubeClick = useCallback((clickedIdx) => {
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
			if (targetTube.length > 0 && !(targetTube.length === 4 && targetTube.every((c) => c === targetTube[0]))) {
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
		setTiltDirection(isRight ? "right" : "left");
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
				const targetIsNowComplete = nextTubes[targetIdx].length === 4 && nextTubes[targetIdx].every((c) => c === nextTubes[targetIdx][0]);
				if (targetIsNowComplete) {
					sound.playTubeComplete();
				}
				// Check Win Condition
				if (isLevelWon(nextTubes, 4)) {
					setTimeout(() => {
						const { stars } = recordLevelVictory(currentLevelData.id, moves + 1, currentLevelData.targetMoves);
						setUserProgress(loadUserProgress());
						setWinStats({
							moves: moves + 1,
							targetMoves: currentLevelData.targetMoves,
							stars
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
	}, [
		isPouring,
		selectedIndex,
		tubes,
		moves,
		currentLevelData
	]);
	// Toggle Accessibility / Symbol mode
	const handleToggleSymbols = () => {
		const nextVal = !symbolMode;
		setSymbolMode(nextVal);
		const updated = {
			...userProgress,
			symbolMode: nextVal
		};
		setUserProgress(updated);
		saveUserProgress(updated);
	};
	// Toggle Sound
	const handleToggleSound = () => {
		const nextVal = !soundEnabled;
		setSoundEnabled(nextVal);
		const updated = {
			...userProgress,
			soundEnabled: nextVal
		};
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
	const handleSelectLevel = (levelId) => {
		const lvl = getLevel(levelId);
		loadLevel(lvl);
	};
	// Start daily challenge
	const handleStartDaily = () => {
		const daily = getDailyChallenge();
		loadLevel(daily);
	};
	// Start custom game
	const handleStartCustom = (colorCount, emptyCount) => {
		const custom = generateCustomGame(colorCount, emptyCount);
		loadLevel(custom);
	};
	// Check for Stalemate (Deadlock)
	const isWon = isLevelWon(tubes, 4);
	const possibleMoves = isWon ? [] : getValidMoves(tubes, 4);
	const isStalemate = !isWon && possibleMoves.length === 0;
	// Split tubes into 1 or 2 rows for optimal presentation
	const totalTubes = tubes.length;
	let topRow = [];
	let bottomRow = [];
	if (totalTubes <= 6) {
		topRow = tubes.map((tube, idx) => ({
			tube,
			originalIdx: idx
		}));
	} else {
		const half = Math.ceil(totalTubes / 2);
		topRow = tubes.slice(0, half).map((tube, idx) => ({
			tube,
			originalIdx: idx
		}));
		bottomRow = tubes.slice(half).map((tube, idx) => ({
			tube,
			originalIdx: idx + half
		}));
	}
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-900",
		children: [
			/* @__PURE__ */ _jsxDEV(TopBar, {
				onOpenLevels: () => setIsLevelSelectOpen(true),
				onOpenDaily: handleStartDaily,
				onOpenCustom: () => setIsCustomModalOpen(true),
				onOpenHelp: () => setIsHelpModalOpen(true),
				onOpenDownload: () => setIsDownloadModalOpen(true),
				soundEnabled,
				onToggleSound: handleToggleSound,
				symbolMode,
				onToggleSymbols: handleToggleSymbols,
				currentLevelName: currentLevelData.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 334,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full pb-8",
				children: [
					/* @__PURE__ */ _jsxDEV(GameHUD, {
						levelTitle: currentLevelData.name,
						difficulty: currentLevelData.difficulty,
						colorCount: currentLevelData.colorCount,
						emptyCount: currentLevelData.emptyCount,
						moves,
						targetMoves: currentLevelData.targetMoves,
						canUndo: history.length > 0 && !isPouring,
						isStalemate,
						onUndo: handleUndo,
						onReset: handleReset,
						onHint: handleHint,
						onAddTube: handleAddTube,
						isSolvingHint,
						extraTubesUsed
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("section", {
						"aria-label": "Tablero de juego de tubos de ensayo",
						className: "my-auto py-6 sm:py-10 px-2 sm:px-6 flex flex-col items-center justify-center gap-6 sm:gap-10",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap items-end justify-center gap-3 sm:gap-6",
							children: topRow.map(({ tube, originalIdx }) => /* @__PURE__ */ _jsxDEV(TubeComponent, {
								index: originalIdx,
								colors: tube,
								isSelected: selectedIndex === originalIdx,
								isHintSource: hintSource === originalIdx,
								isHintTarget: hintTarget === originalIdx,
								isPouringSource: isPouring && pourSource === originalIdx,
								tiltAngle,
								tiltDirection,
								symbolMode,
								onClick: () => handleTubeClick(originalIdx),
								disabled: isPouring
							}, `tube-${originalIdx}`, false, {
								fileName: _jsxFileName,
								lineNumber: 375,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 373,
							columnNumber: 11
						}, this), bottomRow.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap items-end justify-center gap-3 sm:gap-6 pt-2",
							children: bottomRow.map(({ tube, originalIdx }) => /* @__PURE__ */ _jsxDEV(TubeComponent, {
								index: originalIdx,
								colors: tube,
								isSelected: selectedIndex === originalIdx,
								isHintSource: hintSource === originalIdx,
								isHintTarget: hintTarget === originalIdx,
								isPouringSource: isPouring && pourSource === originalIdx,
								tiltAngle,
								tiltDirection,
								symbolMode,
								onClick: () => handleTubeClick(originalIdx),
								disabled: isPouring
							}, `tube-${originalIdx}`, false, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 394,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-full max-w-2xl mx-auto px-4",
						children: [/* @__PURE__ */ _jsxDEV("div", { className: "h-1.5 w-full bg-slate-300/80 dark:bg-slate-800 rounded-full shadow-inner" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 417,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-3 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: "Toca un tubo para levantarlo y otro para verter" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 419,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									"aria-hidden": "true",
									children: "·"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "Usa Pista si necesitas orientación" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 421,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 418,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 416,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 348,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(LevelSelectModal, {
				isOpen: isLevelSelectOpen,
				onClose: () => setIsLevelSelectOpen(false),
				onSelectLevel: handleSelectLevel,
				currentLevelId: currentLevelData.id,
				userProgress
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 427,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(WinModal, {
				isOpen: isWinModalOpen,
				levelId: currentLevelData.id,
				moves: winStats.moves,
				targetMoves: winStats.targetMoves,
				stars: winStats.stars,
				onNextLevel: handleNextLevel,
				onReplay: handleReset,
				onOpenLevelSelect: () => {
					setIsWinModalOpen(false);
					setIsLevelSelectOpen(true);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 435,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(CustomLevelModal, {
				isOpen: isCustomModalOpen,
				onClose: () => setIsCustomModalOpen(false),
				onStartCustomGame: handleStartCustom
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 449,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(HelpModal, {
				isOpen: isHelpModalOpen,
				onClose: () => setIsHelpModalOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 455,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(DownloadModal, {
				isOpen: isDownloadModalOpen,
				onClose: () => setIsDownloadModalOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 460,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 332,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,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b3VyY2VzIjpbIkFwcC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9wQmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL1RvcEJhci50c3gnO1xuaW1wb3J0IHsgR2FtZUhVRCB9IGZyb20gJy4vY29tcG9uZW50cy9HYW1lSFVELnRzeCc7XG5pbXBvcnQgeyBUdWJlIGFzIFR1YmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvVHViZS50c3gnO1xuaW1wb3J0IHsgTGV2ZWxTZWxlY3RNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9MZXZlbFNlbGVjdE1vZGFsLnRzeCc7XG5pbXBvcnQgeyBXaW5Nb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9XaW5Nb2RhbC50c3gnO1xuaW1wb3J0IHsgQ3VzdG9tTGV2ZWxNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9DdXN0b21MZXZlbE1vZGFsLnRzeCc7XG5pbXBvcnQgeyBIZWxwTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVscE1vZGFsLnRzeCc7XG5pbXBvcnQgeyBEb3dubG9hZE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL0Rvd25sb2FkTW9kYWwudHN4JztcbmltcG9ydCB7XG4gIExldmVsRGF0YSxcbiAgZ2V0TGV2ZWwsXG4gIGdldERhaWx5Q2hhbGxlbmdlLFxuICBnZW5lcmF0ZUN1c3RvbUdhbWUsXG59IGZyb20gJy4vZ2FtZS9sZXZlbHMudHMnO1xuaW1wb3J0IHtcbiAgVHViZSxcbiAgY2FuUG91cixcbiAgZXhlY3V0ZVBvdXIsXG4gIGlzTGV2ZWxXb24sXG4gIGdldFZhbGlkTW92ZXMsXG4gIHNvbHZlV2F0ZXJQdXp6bGUsXG4gIGdldFBvdXJBbW91bnQsXG59IGZyb20gJy4vZ2FtZS9lbmdpbmUudHMnO1xuaW1wb3J0IHsgc291bmQgfSBmcm9tICcuL2dhbWUvYXVkaW8udHMnO1xuaW1wb3J0IHtcbiAgbG9hZFVzZXJQcm9ncmVzcyxcbiAgc2F2ZVVzZXJQcm9ncmVzcyxcbiAgcmVjb3JkTGV2ZWxWaWN0b3J5LFxuICBVc2VyUHJvZ3Jlc3MsXG59IGZyb20gJy4vZ2FtZS9zdG9yYWdlLnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbdXNlclByb2dyZXNzLCBzZXRVc2VyUHJvZ3Jlc3NdID0gdXNlU3RhdGU8VXNlclByb2dyZXNzPihsb2FkVXNlclByb2dyZXNzKCkpO1xuICBjb25zdCBbY3VycmVudExldmVsRGF0YSwgc2V0Q3VycmVudExldmVsRGF0YV0gPSB1c2VTdGF0ZTxMZXZlbERhdGE+KCgpID0+XG4gICAgZ2V0TGV2ZWwodXNlclByb2dyZXNzLmhpZ2hlc3RVbmxvY2tlZExldmVsKVxuICApO1xuICBjb25zdCBbdHViZXMsIHNldFR1YmVzXSA9IHVzZVN0YXRlPFR1YmVbXT4oKCkgPT5cbiAgICBjdXJyZW50TGV2ZWxEYXRhLnR1YmVzLm1hcCgodCkgPT4gWy4uLnRdKVxuICApO1xuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZTxUdWJlW11bXT4oW10pO1xuICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtleHRyYVR1YmVzVXNlZCwgc2V0RXh0cmFUdWJlc1VzZWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAvLyBTZWxlY3Rpb24gJiBQb3VyaW5nIEFuaW1hdGlvbiBTdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzUG91cmluZywgc2V0SXNQb3VyaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3BvdXJTb3VyY2UsIHNldFBvdXJTb3VyY2VdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0aWx0QW5nbGUsIHNldFRpbHRBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbdGlsdERpcmVjdGlvbiwgc2V0VGlsdERpcmVjdGlvbl0gPSB1c2VTdGF0ZTwnbGVmdCcgfCAncmlnaHQnPigncmlnaHQnKTtcblxuICAvLyBIaW50IFN0YXRlXG4gIGNvbnN0IFtoaW50U291cmNlLCBzZXRIaW50U291cmNlXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaGludFRhcmdldCwgc2V0SGludFRhcmdldF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzU29sdmluZ0hpbnQsIHNldElzU29sdmluZ0hpbnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIE1vZGFsc1xuICBjb25zdCBbaXNMZXZlbFNlbGVjdE9wZW4sIHNldElzTGV2ZWxTZWxlY3RPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ3VzdG9tTW9kYWxPcGVuLCBzZXRJc0N1c3RvbU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0hlbHBNb2RhbE9wZW4sIHNldElzSGVscE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Rvd25sb2FkTW9kYWxPcGVuLCBzZXRJc0Rvd25sb2FkTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzV2luTW9kYWxPcGVuLCBzZXRJc1dpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aW5TdGF0cywgc2V0V2luU3RhdHNdID0gdXNlU3RhdGUoeyBtb3ZlczogMCwgdGFyZ2V0TW92ZXM6IDAsIHN0YXJzOiAzIH0pO1xuXG4gIC8vIFNldHRpbmdzXG4gIGNvbnN0IFtzb3VuZEVuYWJsZWQsIHNldFNvdW5kRW5hYmxlZF0gPSB1c2VTdGF0ZSh1c2VyUHJvZ3Jlc3Muc291bmRFbmFibGVkKTtcbiAgY29uc3QgW3N5bWJvbE1vZGUsIHNldFN5bWJvbE1vZGVdID0gdXNlU3RhdGUodXNlclByb2dyZXNzLnN5bWJvbE1vZGUpO1xuXG4gIC8vIFN5bmMgc291bmQgZW5naW5lIHdpdGggc3RhdGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb3VuZC5lbmFibGVkID0gc291bmRFbmFibGVkO1xuICB9LCBbc291bmRFbmFibGVkXSk7XG5cbiAgLy8gTG9hZCBhIG5ldyBsZXZlbFxuICBjb25zdCBsb2FkTGV2ZWwgPSB1c2VDYWxsYmFjayhcbiAgICAobGV2ZWxEYXRhOiBMZXZlbERhdGEpID0+IHtcbiAgICAgIHNldEN1cnJlbnRMZXZlbERhdGEobGV2ZWxEYXRhKTtcbiAgICAgIHNldFR1YmVzKGxldmVsRGF0YS50dWJlcy5tYXAoKHQpID0+IFsuLi50XSkpO1xuICAgICAgc2V0SGlzdG9yeShbXSk7XG4gICAgICBzZXRNb3ZlcygwKTtcbiAgICAgIHNldEV4dHJhVHViZXNVc2VkKDApO1xuICAgICAgc2V0U2VsZWN0ZWRJbmRleChudWxsKTtcbiAgICAgIHNldElzUG91cmluZyhmYWxzZSk7XG4gICAgICBzZXRQb3VyU291cmNlKG51bGwpO1xuICAgICAgc2V0SGludFNvdXJjZShudWxsKTtcbiAgICAgIHNldEhpbnRUYXJnZXQobnVsbCk7XG4gICAgICBzZXRJc1dpbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIFJlc3RhcnQgY3VycmVudCBsZXZlbFxuICBjb25zdCBoYW5kbGVSZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzb3VuZC5wbGF5U2VsZWN0KCk7XG4gICAgbG9hZExldmVsKGN1cnJlbnRMZXZlbERhdGEpO1xuICB9LCBbY3VycmVudExldmVsRGF0YSwgbG9hZExldmVsXSk7XG5cbiAgLy8gVW5kbyBtb3ZlXG4gIGNvbnN0IGhhbmRsZVVuZG8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGhpc3RvcnkubGVuZ3RoID09PSAwIHx8IGlzUG91cmluZykgcmV0dXJuO1xuICAgIHNvdW5kLnBsYXlTZWxlY3QoKTtcbiAgICBjb25zdCBwcmV2aW91cyA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICBzZXRIaXN0b3J5KChwcmV2KSA9PiBwcmV2LnNsaWNlKDAsIC0xKSk7XG4gICAgc2V0VHViZXMocHJldmlvdXMubWFwKCh0KSA9PiBbLi4udF0pKTtcbiAgICBzZXRNb3ZlcygobSkgPT4gTWF0aC5tYXgoMCwgbSAtIDEpKTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KG51bGwpO1xuICAgIHNldEhpbnRTb3VyY2UobnVsbCk7XG4gICAgc2V0SGludFRhcmdldChudWxsKTtcbiAgfSwgW2hpc3RvcnksIGlzUG91cmluZ10pO1xuXG4gIC8vIEFkZCBleHRyYSBlbXB0eSB0dWJlXG4gIGNvbnN0IGhhbmRsZUFkZFR1YmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGV4dHJhVHViZXNVc2VkID49IDIgfHwgaXNQb3VyaW5nKSByZXR1cm47XG4gICAgc291bmQucGxheVNlbGVjdCgpO1xuICAgIHNldEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB0dWJlcy5tYXAoKHQpID0+IFsuLi50XSldKTtcbiAgICBzZXRUdWJlcygocHJldikgPT4gWy4uLnByZXYsIFtdXSk7XG4gICAgc2V0RXh0cmFUdWJlc1VzZWQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KG51bGwpO1xuICAgIHNldEhpbnRTb3VyY2UobnVsbCk7XG4gICAgc2V0SGludFRhcmdldChudWxsKTtcbiAgfSwgW2V4dHJhVHViZXNVc2VkLCBpc1BvdXJpbmcsIHR1YmVzXSk7XG5cbiAgLy8gSGludCBzb2x2ZXJcbiAgY29uc3QgaGFuZGxlSGludCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNTb2x2aW5nSGludCB8fCBpc1BvdXJpbmcpIHJldHVybjtcbiAgICBzZXRJc1NvbHZpbmdIaW50KHRydWUpO1xuICAgIHNvdW5kLnBsYXlTZWxlY3QoKTtcblxuICAgIC8vIFNtYWxsIGFzeW5jIGRlbGF5IHNvIFVJIHVwZGF0ZXMgYmVmb3JlIGNhbGN1bGF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzb2x1dGlvbiA9IHNvbHZlV2F0ZXJQdXp6bGUodHViZXMsIDQsIDE1MDAwKTtcbiAgICAgIHNldElzU29sdmluZ0hpbnQoZmFsc2UpO1xuXG4gICAgICBpZiAoc29sdXRpb24gJiYgc29sdXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBuZXh0TW92ZSA9IHNvbHV0aW9uWzBdO1xuICAgICAgICBzZXRIaW50U291cmNlKG5leHRNb3ZlLmZyb20pO1xuICAgICAgICBzZXRIaW50VGFyZ2V0KG5leHRNb3ZlLnRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhbGxiYWNrOiBQaWNrIGFueSB2YWxpZCBsZWdhbCBtb3ZlIGlmIGRlZXAgQkZTIGhpdCBjdXRvZmZcbiAgICAgICAgY29uc3QgdmFsaWRNb3ZlcyA9IGdldFZhbGlkTW92ZXModHViZXMsIDQpO1xuICAgICAgICBpZiAodmFsaWRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0SGludFNvdXJjZSh2YWxpZE1vdmVzWzBdLmZyb20pO1xuICAgICAgICAgIHNldEhpbnRUYXJnZXQodmFsaWRNb3Zlc1swXS50byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291bmQucGxheUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gIH0sIFtpc1NvbHZpbmdIaW50LCBpc1BvdXJpbmcsIHR1YmVzXSk7XG5cbiAgLy8gVHViZSBjbGljayBpbnRlcmFjdGlvblxuICBjb25zdCBoYW5kbGVUdWJlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoY2xpY2tlZElkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaXNQb3VyaW5nKSByZXR1cm47XG5cbiAgICAgIC8vIENhc2UgMTogTm8gdHViZSBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR1YmUgPSB0dWJlc1tjbGlja2VkSWR4XTtcbiAgICAgICAgaWYgKHR1YmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gQ2FuJ3Qgc2VsZWN0IGVtcHR5IHR1YmUgYXMgc291cmNlXG4gICAgICAgICAgc291bmQucGxheUVycm9yKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdHViZSBpcyBhbHJlYWR5IGZ1bGx5IGNvbXBsZXRlZCB3aXRoIGFsbCBpZGVudGljYWwgY29sb3JzLCBkaXNjb3VyYWdlIHBpY2tpbmcgaXRcbiAgICAgICAgaWYgKHR1YmUubGVuZ3RoID09PSA0ICYmIHR1YmUuZXZlcnkoKGMpID0+IGMgPT09IHR1YmVbMF0pKSB7XG4gICAgICAgICAgc291bmQucGxheUVycm9yKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHR1YmVcbiAgICAgICAgc291bmQucGxheVNlbGVjdCgpO1xuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KGNsaWNrZWRJZHgpO1xuICAgICAgICBzZXRIaW50U291cmNlKG51bGwpO1xuICAgICAgICBzZXRIaW50VGFyZ2V0KG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENhc2UgMjogQ2xpY2tlZCB0aGUgc2FtZSB0dWJlIC0+IGRlc2VsZWN0XG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gY2xpY2tlZElkeCkge1xuICAgICAgICBzb3VuZC5wbGF5U2VsZWN0KCk7XG4gICAgICAgIHNldFNlbGVjdGVkSW5kZXgobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FzZSAzOiBDbGlja2VkIGEgZGlmZmVyZW50IHR1YmUgLT4gQXR0ZW1wdCBQb3VyXG4gICAgICBjb25zdCBzb3VyY2VJZHggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgY29uc3QgdGFyZ2V0SWR4ID0gY2xpY2tlZElkeDtcblxuICAgICAgaWYgKCFjYW5Qb3VyKHR1YmVzLCBzb3VyY2VJZHgsIHRhcmdldElkeCwgNCkpIHtcbiAgICAgICAgLy8gSWYgdGFyZ2V0IGhhcyBsaXF1aWQgYW5kIGlzIG5vdCBlbXB0eSwgc3dpdGNoIHNlbGVjdGlvbiB0byB0aGF0IHR1YmUgaW5zdGVhZCFcbiAgICAgICAgY29uc3QgdGFyZ2V0VHViZSA9IHR1YmVzW3RhcmdldElkeF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXRUdWJlLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAhKHRhcmdldFR1YmUubGVuZ3RoID09PSA0ICYmIHRhcmdldFR1YmUuZXZlcnkoKGMpID0+IGMgPT09IHRhcmdldFR1YmVbMF0pKVxuICAgICAgICApIHtcbiAgICAgICAgICBzb3VuZC5wbGF5U2VsZWN0KCk7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleCh0YXJnZXRJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdW5kLnBsYXlFcnJvcigpO1xuICAgICAgICAgIHNldFNlbGVjdGVkSW5kZXgobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZCBQb3VyIVxuICAgICAgY29uc3QgYW1vdW50ID0gZ2V0UG91ckFtb3VudCh0dWJlcywgc291cmNlSWR4LCB0YXJnZXRJZHgsIDQpO1xuICAgICAgY29uc3QgaXNSaWdodCA9IHRhcmdldElkeCA+IHNvdXJjZUlkeDtcblxuICAgICAgLy8gVHJpZ2dlciBwb3VyIGFuaW1hdGlvblxuICAgICAgc2V0SXNQb3VyaW5nKHRydWUpO1xuICAgICAgc2V0UG91clNvdXJjZShzb3VyY2VJZHgpO1xuICAgICAgc2V0VGlsdERpcmVjdGlvbihpc1JpZ2h0ID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICBzZXRUaWx0QW5nbGUoNTUpO1xuXG4gICAgICBzb3VuZC5wbGF5UG91cihhbW91bnQpO1xuXG4gICAgICAvLyBTYXZlIGhpc3RvcnkgZm9yIFVuZG9cbiAgICAgIHNldEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB0dWJlcy5tYXAoKHQpID0+IFsuLi50XSldKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV4ZWN1dGVQb3VyKHR1YmVzLCBzb3VyY2VJZHgsIHRhcmdldElkeCwgNCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCBuZXh0VHViZXMgPSByZXN1bHQubmV4dFR1YmVzO1xuICAgICAgICAgIHNldFR1YmVzKG5leHRUdWJlcyk7XG4gICAgICAgICAgc2V0TW92ZXMoKG0pID0+IG0gKyAxKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCB0dWJlIGJlY2FtZSBjb21wbGV0ZVxuICAgICAgICAgIGNvbnN0IHRhcmdldElzTm93Q29tcGxldGUgPVxuICAgICAgICAgICAgbmV4dFR1YmVzW3RhcmdldElkeF0ubGVuZ3RoID09PSA0ICYmXG4gICAgICAgICAgICBuZXh0VHViZXNbdGFyZ2V0SWR4XS5ldmVyeSgoYykgPT4gYyA9PT0gbmV4dFR1YmVzW3RhcmdldElkeF1bMF0pO1xuICAgICAgICAgIGlmICh0YXJnZXRJc05vd0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBzb3VuZC5wbGF5VHViZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgV2luIENvbmRpdGlvblxuICAgICAgICAgIGlmIChpc0xldmVsV29uKG5leHRUdWJlcywgNCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHN0YXJzIH0gPSByZWNvcmRMZXZlbFZpY3RvcnkoXG4gICAgICAgICAgICAgICAgY3VycmVudExldmVsRGF0YS5pZCxcbiAgICAgICAgICAgICAgICBtb3ZlcyArIDEsXG4gICAgICAgICAgICAgICAgY3VycmVudExldmVsRGF0YS50YXJnZXRNb3Zlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzZXRVc2VyUHJvZ3Jlc3MobG9hZFVzZXJQcm9ncmVzcygpKTtcbiAgICAgICAgICAgICAgc2V0V2luU3RhdHMoe1xuICAgICAgICAgICAgICAgIG1vdmVzOiBtb3ZlcyArIDEsXG4gICAgICAgICAgICAgICAgdGFyZ2V0TW92ZXM6IGN1cnJlbnRMZXZlbERhdGEudGFyZ2V0TW92ZXMsXG4gICAgICAgICAgICAgICAgc3RhcnMsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5V2luKCk7XG4gICAgICAgICAgICAgIHNldElzV2luTW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBwb3VyIHN0YXRlXG4gICAgICAgIHNldElzUG91cmluZyhmYWxzZSk7XG4gICAgICAgIHNldFBvdXJTb3VyY2UobnVsbCk7XG4gICAgICAgIHNldFNlbGVjdGVkSW5kZXgobnVsbCk7XG4gICAgICAgIHNldFRpbHRBbmdsZSgwKTtcbiAgICAgIH0sIDI4MCk7XG4gICAgfSxcbiAgICBbaXNQb3VyaW5nLCBzZWxlY3RlZEluZGV4LCB0dWJlcywgbW92ZXMsIGN1cnJlbnRMZXZlbERhdGFdXG4gICk7XG5cbiAgLy8gVG9nZ2xlIEFjY2Vzc2liaWxpdHkgLyBTeW1ib2wgbW9kZVxuICBjb25zdCBoYW5kbGVUb2dnbGVTeW1ib2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHRWYWwgPSAhc3ltYm9sTW9kZTtcbiAgICBzZXRTeW1ib2xNb2RlKG5leHRWYWwpO1xuICAgIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLnVzZXJQcm9ncmVzcywgc3ltYm9sTW9kZTogbmV4dFZhbCB9O1xuICAgIHNldFVzZXJQcm9ncmVzcyh1cGRhdGVkKTtcbiAgICBzYXZlVXNlclByb2dyZXNzKHVwZGF0ZWQpO1xuICB9O1xuXG4gIC8vIFRvZ2dsZSBTb3VuZFxuICBjb25zdCBoYW5kbGVUb2dnbGVTb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0VmFsID0gIXNvdW5kRW5hYmxlZDtcbiAgICBzZXRTb3VuZEVuYWJsZWQobmV4dFZhbCk7XG4gICAgY29uc3QgdXBkYXRlZCA9IHsgLi4udXNlclByb2dyZXNzLCBzb3VuZEVuYWJsZWQ6IG5leHRWYWwgfTtcbiAgICBzZXRVc2VyUHJvZ3Jlc3ModXBkYXRlZCk7XG4gICAgc2F2ZVVzZXJQcm9ncmVzcyh1cGRhdGVkKTtcbiAgfTtcblxuICAvLyBMZXZlbCBhZHZhbmNlIGZyb20gV2luIG1vZGFsXG4gIGNvbnN0IGhhbmRsZU5leHRMZXZlbCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YS5pZCA+IDAgJiYgY3VycmVudExldmVsRGF0YS5pZCA8IDEwMCkge1xuICAgICAgY29uc3QgbmV4dEx2bCA9IGdldExldmVsKGN1cnJlbnRMZXZlbERhdGEuaWQgKyAxKTtcbiAgICAgIGxvYWRMZXZlbChuZXh0THZsKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VsZWN0IGxldmVsIGJ5IElEXG4gIGNvbnN0IGhhbmRsZVNlbGVjdExldmVsID0gKGxldmVsSWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGx2bCA9IGdldExldmVsKGxldmVsSWQpO1xuICAgIGxvYWRMZXZlbChsdmwpO1xuICB9O1xuXG4gIC8vIFN0YXJ0IGRhaWx5IGNoYWxsZW5nZVxuICBjb25zdCBoYW5kbGVTdGFydERhaWx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhaWx5ID0gZ2V0RGFpbHlDaGFsbGVuZ2UoKTtcbiAgICBsb2FkTGV2ZWwoZGFpbHkpO1xuICB9O1xuXG4gIC8vIFN0YXJ0IGN1c3RvbSBnYW1lXG4gIGNvbnN0IGhhbmRsZVN0YXJ0Q3VzdG9tID0gKGNvbG9yQ291bnQ6IG51bWJlciwgZW1wdHlDb3VudDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY3VzdG9tID0gZ2VuZXJhdGVDdXN0b21HYW1lKGNvbG9yQ291bnQsIGVtcHR5Q291bnQpO1xuICAgIGxvYWRMZXZlbChjdXN0b20pO1xuICB9O1xuXG4gIC8vIENoZWNrIGZvciBTdGFsZW1hdGUgKERlYWRsb2NrKVxuICBjb25zdCBpc1dvbiA9IGlzTGV2ZWxXb24odHViZXMsIDQpO1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gaXNXb24gPyBbXSA6IGdldFZhbGlkTW92ZXModHViZXMsIDQpO1xuICBjb25zdCBpc1N0YWxlbWF0ZSA9ICFpc1dvbiAmJiBwb3NzaWJsZU1vdmVzLmxlbmd0aCA9PT0gMDtcblxuICAvLyBTcGxpdCB0dWJlcyBpbnRvIDEgb3IgMiByb3dzIGZvciBvcHRpbWFsIHByZXNlbnRhdGlvblxuICBjb25zdCB0b3RhbFR1YmVzID0gdHViZXMubGVuZ3RoO1xuICBsZXQgdG9wUm93OiB7IHR1YmU6IFR1YmU7IG9yaWdpbmFsSWR4OiBudW1iZXIgfVtdID0gW107XG4gIGxldCBib3R0b21Sb3c6IHsgdHViZTogVHViZTsgb3JpZ2luYWxJZHg6IG51bWJlciB9W10gPSBbXTtcblxuICBpZiAodG90YWxUdWJlcyA8PSA2KSB7XG4gICAgdG9wUm93ID0gdHViZXMubWFwKCh0dWJlLCBpZHgpID0+ICh7IHR1YmUsIG9yaWdpbmFsSWR4OiBpZHggfSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwodG90YWxUdWJlcyAvIDIpO1xuICAgIHRvcFJvdyA9IHR1YmVzLnNsaWNlKDAsIGhhbGYpLm1hcCgodHViZSwgaWR4KSA9PiAoeyB0dWJlLCBvcmlnaW5hbElkeDogaWR4IH0pKTtcbiAgICBib3R0b21Sb3cgPSB0dWJlcy5zbGljZShoYWxmKS5tYXAoKHR1YmUsIGlkeCkgPT4gKHtcbiAgICAgIHR1YmUsXG4gICAgICBvcmlnaW5hbElkeDogaWR4ICsgaGFsZixcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXNsYXRlLTEwMCBkYXJrOmJnLXNsYXRlLTk1MCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtc2xhdGUtMTAwIGZsZXggZmxleC1jb2wgc2VsZWN0aW9uOmJnLXNreS01MDAvMzAgc2VsZWN0aW9uOnRleHQtc2t5LTkwMFwiPlxuICAgICAgey8qIFVuaXZlcnNhbCBUb3AgQmFyICgxIHJvdywgMyB6b25lcykgKi99XG4gICAgICA8VG9wQmFyXG4gICAgICAgIG9uT3BlbkxldmVscz17KCkgPT4gc2V0SXNMZXZlbFNlbGVjdE9wZW4odHJ1ZSl9XG4gICAgICAgIG9uT3BlbkRhaWx5PXtoYW5kbGVTdGFydERhaWx5fVxuICAgICAgICBvbk9wZW5DdXN0b209eygpID0+IHNldElzQ3VzdG9tTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICBvbk9wZW5IZWxwPXsoKSA9PiBzZXRJc0hlbHBNb2RhbE9wZW4odHJ1ZSl9XG4gICAgICAgIG9uT3BlbkRvd25sb2FkPXsoKSA9PiBzZXRJc0Rvd25sb2FkTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICBzb3VuZEVuYWJsZWQ9e3NvdW5kRW5hYmxlZH1cbiAgICAgICAgb25Ub2dnbGVTb3VuZD17aGFuZGxlVG9nZ2xlU291bmR9XG4gICAgICAgIHN5bWJvbE1vZGU9e3N5bWJvbE1vZGV9XG4gICAgICAgIG9uVG9nZ2xlU3ltYm9scz17aGFuZGxlVG9nZ2xlU3ltYm9sc31cbiAgICAgICAgY3VycmVudExldmVsTmFtZT17Y3VycmVudExldmVsRGF0YS5uYW1lfVxuICAgICAgLz5cblxuICAgICAgey8qIE1haW4gR2FtZSBBcmVuYSAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtYXgtdy01eGwgbXgtYXV0byB3LWZ1bGwgcGItOFwiPlxuICAgICAgICB7LyogR2FtZSBIVUQgKE1vdmVzLCBMZXZlbCBUaXRsZSwgQ29udHJvbHMpICovfVxuICAgICAgICA8R2FtZUhVRFxuICAgICAgICAgIGxldmVsVGl0bGU9e2N1cnJlbnRMZXZlbERhdGEubmFtZX1cbiAgICAgICAgICBkaWZmaWN1bHR5PXtjdXJyZW50TGV2ZWxEYXRhLmRpZmZpY3VsdHl9XG4gICAgICAgICAgY29sb3JDb3VudD17Y3VycmVudExldmVsRGF0YS5jb2xvckNvdW50fVxuICAgICAgICAgIGVtcHR5Q291bnQ9e2N1cnJlbnRMZXZlbERhdGEuZW1wdHlDb3VudH1cbiAgICAgICAgICBtb3Zlcz17bW92ZXN9XG4gICAgICAgICAgdGFyZ2V0TW92ZXM9e2N1cnJlbnRMZXZlbERhdGEudGFyZ2V0TW92ZXN9XG4gICAgICAgICAgY2FuVW5kbz17aGlzdG9yeS5sZW5ndGggPiAwICYmICFpc1BvdXJpbmd9XG4gICAgICAgICAgaXNTdGFsZW1hdGU9e2lzU3RhbGVtYXRlfVxuICAgICAgICAgIG9uVW5kbz17aGFuZGxlVW5kb31cbiAgICAgICAgICBvblJlc2V0PXtoYW5kbGVSZXNldH1cbiAgICAgICAgICBvbkhpbnQ9e2hhbmRsZUhpbnR9XG4gICAgICAgICAgb25BZGRUdWJlPXtoYW5kbGVBZGRUdWJlfVxuICAgICAgICAgIGlzU29sdmluZ0hpbnQ9e2lzU29sdmluZ0hpbnR9XG4gICAgICAgICAgZXh0cmFUdWJlc1VzZWQ9e2V4dHJhVHViZXNVc2VkfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBQbGF5IEFyZWE6IFR1YmUgVHJheSAqL31cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVGFibGVybyBkZSBqdWVnbyBkZSB0dWJvcyBkZSBlbnNheW9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWF1dG8gcHktNiBzbTpweS0xMCBweC0yIHNtOnB4LTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgc206Z2FwLTEwXCJcbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBSb3cgMSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBzbTpnYXAtNlwiPlxuICAgICAgICAgICAge3RvcFJvdy5tYXAoKHsgdHViZSwgb3JpZ2luYWxJZHggfSkgPT4gKFxuICAgICAgICAgICAgICA8VHViZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT17YHR1YmUtJHtvcmlnaW5hbElkeH1gfVxuICAgICAgICAgICAgICAgIGluZGV4PXtvcmlnaW5hbElkeH1cbiAgICAgICAgICAgICAgICBjb2xvcnM9e3R1YmV9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gb3JpZ2luYWxJZHh9XG4gICAgICAgICAgICAgICAgaXNIaW50U291cmNlPXtoaW50U291cmNlID09PSBvcmlnaW5hbElkeH1cbiAgICAgICAgICAgICAgICBpc0hpbnRUYXJnZXQ9e2hpbnRUYXJnZXQgPT09IG9yaWdpbmFsSWR4fVxuICAgICAgICAgICAgICAgIGlzUG91cmluZ1NvdXJjZT17aXNQb3VyaW5nICYmIHBvdXJTb3VyY2UgPT09IG9yaWdpbmFsSWR4fVxuICAgICAgICAgICAgICAgIHRpbHRBbmdsZT17dGlsdEFuZ2xlfVxuICAgICAgICAgICAgICAgIHRpbHREaXJlY3Rpb249e3RpbHREaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgc3ltYm9sTW9kZT17c3ltYm9sTW9kZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUdWJlQ2xpY2sob3JpZ2luYWxJZHgpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1BvdXJpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSb3cgMiAoaWYgPiA2IHR1YmVzKSAqL31cbiAgICAgICAgICB7Ym90dG9tUm93Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgZ2FwLTMgc206Z2FwLTYgcHQtMlwiPlxuICAgICAgICAgICAgICB7Ym90dG9tUm93Lm1hcCgoeyB0dWJlLCBvcmlnaW5hbElkeCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFR1YmVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17YHR1YmUtJHtvcmlnaW5hbElkeH1gfVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e29yaWdpbmFsSWR4fVxuICAgICAgICAgICAgICAgICAgY29sb3JzPXt0dWJlfVxuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gb3JpZ2luYWxJZHh9XG4gICAgICAgICAgICAgICAgICBpc0hpbnRTb3VyY2U9e2hpbnRTb3VyY2UgPT09IG9yaWdpbmFsSWR4fVxuICAgICAgICAgICAgICAgICAgaXNIaW50VGFyZ2V0PXtoaW50VGFyZ2V0ID09PSBvcmlnaW5hbElkeH1cbiAgICAgICAgICAgICAgICAgIGlzUG91cmluZ1NvdXJjZT17aXNQb3VyaW5nICYmIHBvdXJTb3VyY2UgPT09IG9yaWdpbmFsSWR4fVxuICAgICAgICAgICAgICAgICAgdGlsdEFuZ2xlPXt0aWx0QW5nbGV9XG4gICAgICAgICAgICAgICAgICB0aWx0RGlyZWN0aW9uPXt0aWx0RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgc3ltYm9sTW9kZT17c3ltYm9sTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVR1YmVDbGljayhvcmlnaW5hbElkeCl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQb3VyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTdWJ0bGUgVHJheSAvIEJlbmNoIEJhc2UgTGluZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLjUgdy1mdWxsIGJnLXNsYXRlLTMwMC84MCBkYXJrOmJnLXNsYXRlLTgwMCByb3VuZGVkLWZ1bGwgc2hhZG93LWlubmVyXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBkYXJrOnRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICA8c3Bhbj5Ub2NhIHVuIHR1Ym8gcGFyYSBsZXZhbnRhcmxvIHkgb3RybyBwYXJhIHZlcnRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+VXNhIFBpc3RhIHNpIG5lY2VzaXRhcyBvcmllbnRhY2nDs248L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogTW9kYWxzICovfVxuICAgICAgPExldmVsU2VsZWN0TW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc0xldmVsU2VsZWN0T3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNMZXZlbFNlbGVjdE9wZW4oZmFsc2UpfVxuICAgICAgICBvblNlbGVjdExldmVsPXtoYW5kbGVTZWxlY3RMZXZlbH1cbiAgICAgICAgY3VycmVudExldmVsSWQ9e2N1cnJlbnRMZXZlbERhdGEuaWR9XG4gICAgICAgIHVzZXJQcm9ncmVzcz17dXNlclByb2dyZXNzfVxuICAgICAgLz5cblxuICAgICAgPFdpbk1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNXaW5Nb2RhbE9wZW59XG4gICAgICAgIGxldmVsSWQ9e2N1cnJlbnRMZXZlbERhdGEuaWR9XG4gICAgICAgIG1vdmVzPXt3aW5TdGF0cy5tb3Zlc31cbiAgICAgICAgdGFyZ2V0TW92ZXM9e3dpblN0YXRzLnRhcmdldE1vdmVzfVxuICAgICAgICBzdGFycz17d2luU3RhdHMuc3RhcnN9XG4gICAgICAgIG9uTmV4dExldmVsPXtoYW5kbGVOZXh0TGV2ZWx9XG4gICAgICAgIG9uUmVwbGF5PXtoYW5kbGVSZXNldH1cbiAgICAgICAgb25PcGVuTGV2ZWxTZWxlY3Q9eygpID0+IHtcbiAgICAgICAgICBzZXRJc1dpbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgc2V0SXNMZXZlbFNlbGVjdE9wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8Q3VzdG9tTGV2ZWxNb2RhbFxuICAgICAgICBpc09wZW49e2lzQ3VzdG9tTW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0N1c3RvbU1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgIG9uU3RhcnRDdXN0b21HYW1lPXtoYW5kbGVTdGFydEN1c3RvbX1cbiAgICAgIC8+XG5cbiAgICAgIDxIZWxwTW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc0hlbHBNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzSGVscE1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAvPlxuXG4gICAgICA8RG93bmxvYWRNb2RhbFxuICAgICAgICBpc09wZW49e2lzRG93bmxvYWRNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRG93bmxvYWRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==