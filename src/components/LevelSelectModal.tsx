const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { X, Lock, Star } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import { TOTAL_LEVELS, getDifficulty, getDifficultyLabel } from "/src/game/levels.ts";
var _jsxFileName = "/app/applet/src/components/LevelSelectModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const LevelSelectModal = ({ isOpen, onClose, onSelectLevel, currentLevelId, userProgress }) => {
	const [activeTab, setActiveTab] = useState("all");
	const [jumpInput, setJumpInput] = useState("");
	if (!isOpen) return null;
	const tabs = [
		{
			key: "all",
			label: "Todos (100)"
		},
		{
			key: "beginner",
			label: "Principiante (1-10)"
		},
		{
			key: "easy",
			label: "Fácil (11-25)"
		},
		{
			key: "medium",
			label: "Medio (26-50)"
		},
		{
			key: "hard",
			label: "Desafiante (51-75)"
		},
		{
			key: "expert",
			label: "Maestro (76-100)"
		}
	];
	const allLevels = Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1);
	const filteredLevels = allLevels.filter((lvl) => {
		if (activeTab === "all") return true;
		return getDifficulty(lvl) === activeTab;
	});
	const handleJump = (e) => {
		e.preventDefault();
		const target = parseInt(jumpInput, 10);
		if (!isNaN(target) && target >= 1 && target <= TOTAL_LEVELS) {
			if (target <= userProgress.highestUnlockedLevel) {
				onSelectLevel(target);
				onClose();
			}
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "level-select-title",
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
						id: "level-select-title",
						className: "text-xl font-bold text-slate-900 dark:text-white font-display",
						children: "Seleccionar Nivel"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5",
						children: [
							/* @__PURE__ */ _jsxDEV("span", { children: [userProgress.totalStars, " estrellas conseguidas"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"aria-hidden": "true",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: ["Nivel máximo desbloqueado: ", userProgress.highestUnlockedLevel] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
						"aria-label": "Cerrar modal",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-2 border-b border-slate-100 dark:border-slate-800 overflow-x-auto",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-lg w-max",
						children: tabs.map((tab) => /* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: () => setActiveTab(tab.key),
							className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${activeTab === tab.key ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
							children: tab.label
						}, tab.key, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-2.5 bg-slate-50 dark:bg-slate-850/50 flex items-center justify-between gap-4 text-xs",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-slate-500 dark:text-slate-400",
						children: [
							"Mostrando ",
							filteredLevels.length,
							" niveles"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("form", {
						onSubmit: handleJump,
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-slate-500 dark:text-slate-400",
								children: "Ir al nivel:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("input", {
								type: "number",
								min: "1",
								max: TOTAL_LEVELS,
								value: jumpInput,
								onChange: (e) => setJumpInput(e.target.value),
								placeholder: `1-${TOTAL_LEVELS}`,
								className: "w-18 px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-white text-xs text-center font-mono"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								type: "submit",
								className: "px-2.5 py-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded font-medium hover:opacity-90 transition-opacity cursor-pointer",
								children: "Ir"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 overflow-y-auto flex-1 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3",
					children: filteredLevels.map((lvl) => {
						const isUnlocked = lvl <= userProgress.highestUnlockedLevel;
						const isCurrent = lvl === currentLevelId;
						const progress = userProgress.completedLevels[lvl];
						const stars = progress?.stars || 0;
						const difficulty = getDifficulty(lvl);
						return /* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							disabled: !isUnlocked,
							onClick: () => {
								onSelectLevel(lvl);
								onClose();
							},
							className: `relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${isCurrent ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 ring-2 ring-sky-500/20" : isUnlocked ? progress?.completed ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 hover:border-emerald-400" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-slate-400 hover:shadow-xs" : "border-slate-200/50 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-850/40 opacity-50 cursor-not-allowed"}`,
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-base font-bold text-slate-900 dark:text-white font-mono tabular-nums",
									children: lvl
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 flex items-center justify-center h-4",
									children: !isUnlocked ? /* @__PURE__ */ _jsxDEV(Lock, { className: "w-3.5 h-3.5 text-slate-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 21
									}, this) : /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-0.5",
										children: [
											1,
											2,
											3
										].map((s) => /* @__PURE__ */ _jsxDEV(Star, { className: `w-3 h-3 ${s <= stars ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"}` }, s, false, {
											fileName: _jsxFileName,
											lineNumber: 170,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 168,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-slate-400 dark:text-slate-500 mt-1",
									children: getDifficultyLabel(difficulty).slice(0, 4)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 17
								}, this)
							]
						}, lvl, true, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUs7UUFDbEIsV0FBVTtPQUNYOzs7OztPQUNELHdCQUFDLFVBQUQ7UUFDRSxNQUFLO1FBQ0wsV0FBVTtrQkFDWDtPQUVPOzs7OztNQUNKOzs7OzthQUNIOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNaLGVBQWUsS0FBSyxRQUFRO01BQzNCLE1BQU0sYUFBYSxPQUFPLGFBQWE7TUFDdkMsTUFBTSxZQUFZLFFBQVE7TUFDMUIsTUFBTSxXQUFXLGFBQWEsZ0JBQWdCO01BQzlDLE1BQU0sUUFBUSxVQUFVLFNBQVM7TUFDakMsTUFBTSxhQUFhLGNBQWMsR0FBRztNQUVwQyxPQUNFLHdCQUFDLFVBQUQ7T0FFRSxNQUFLO09BQ0wsVUFBVSxDQUFDO09BQ1gsZUFBZTtRQUNiLGNBQWMsR0FBRztRQUNqQixRQUFRO09BQ1Y7T0FDQSxXQUFXLDBHQUNULFlBQ0ksMEVBQ0EsYUFDQSxVQUFVLFlBQ1IsbUhBQ0EsNkdBQ0Y7aUJBZlI7UUFtQkUsd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQ2I7UUFDRzs7Ozs7UUFHTix3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFDWixDQUFDLGFBQ0Esd0JBQUMsTUFBRCxFQUFNLFdBQVUsNkJBQThCOzs7O29CQUU5Qyx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFDWjtXQUFDO1dBQUc7V0FBRztVQUFDLENBQUMsQ0FBQyxLQUFLLE1BQ2Qsd0JBQUMsTUFBRCxFQUVFLFdBQVcsV0FDVCxLQUFLLFFBQ0Qsa0NBQ0EsdUNBRVAsR0FOTTs7OztpQkFNTixDQUNGO1NBQ0U7Ozs7O1FBRUo7Ozs7O1FBR0wsd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQ2IsbUJBQW1CLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3RDOzs7OztPQUNBO1NBOUNEOzs7O2FBOENDO0tBRVosQ0FBQztJQUNFOzs7OztHQUNGOzs7Ozs7Q0FDRjs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJMZXZlbFNlbGVjdE1vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYLCBMb2NrLCBTdGFyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IERpZmZpY3VsdHksIFRPVEFMX0xFVkVMUywgZ2V0RGlmZmljdWx0eSwgZ2V0RGlmZmljdWx0eUxhYmVsIH0gZnJvbSAnLi4vZ2FtZS9sZXZlbHMudHMnO1xuaW1wb3J0IHsgVXNlclByb2dyZXNzIH0gZnJvbSAnLi4vZ2FtZS9zdG9yYWdlLnRzJztcblxuaW50ZXJmYWNlIExldmVsU2VsZWN0TW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25TZWxlY3RMZXZlbDogKGxldmVsSWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudExldmVsSWQ6IG51bWJlcjtcbiAgdXNlclByb2dyZXNzOiBVc2VyUHJvZ3Jlc3M7XG59XG5cbnR5cGUgVGFiS2V5ID0gJ2FsbCcgfCBEaWZmaWN1bHR5O1xuXG5leHBvcnQgY29uc3QgTGV2ZWxTZWxlY3RNb2RhbDogUmVhY3QuRkM8TGV2ZWxTZWxlY3RNb2RhbFByb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgb25TZWxlY3RMZXZlbCxcbiAgY3VycmVudExldmVsSWQsXG4gIHVzZXJQcm9ncmVzcyxcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPFRhYktleT4oJ2FsbCcpO1xuICBjb25zdCBbanVtcElucHV0LCBzZXRKdW1wSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB0YWJzOiB7IGtleTogVGFiS2V5OyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGtleTogJ2FsbCcsIGxhYmVsOiAnVG9kb3MgKDEwMCknIH0sXG4gICAgeyBrZXk6ICdiZWdpbm5lcicsIGxhYmVsOiAnUHJpbmNpcGlhbnRlICgxLTEwKScgfSxcbiAgICB7IGtleTogJ2Vhc3knLCBsYWJlbDogJ0bDoWNpbCAoMTEtMjUpJyB9LFxuICAgIHsga2V5OiAnbWVkaXVtJywgbGFiZWw6ICdNZWRpbyAoMjYtNTApJyB9LFxuICAgIHsga2V5OiAnaGFyZCcsIGxhYmVsOiAnRGVzYWZpYW50ZSAoNTEtNzUpJyB9LFxuICAgIHsga2V5OiAnZXhwZXJ0JywgbGFiZWw6ICdNYWVzdHJvICg3Ni0xMDApJyB9LFxuICBdO1xuXG4gIGNvbnN0IGFsbExldmVscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IFRPVEFMX0xFVkVMUyB9LCAoXywgaSkgPT4gaSArIDEpO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGV2ZWxzID0gYWxsTGV2ZWxzLmZpbHRlcigobHZsKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVRhYiA9PT0gJ2FsbCcpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBnZXREaWZmaWN1bHR5KGx2bCkgPT09IGFjdGl2ZVRhYjtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSnVtcCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcGFyc2VJbnQoanVtcElucHV0LCAxMCk7XG4gICAgaWYgKCFpc05hTih0YXJnZXQpICYmIHRhcmdldCA+PSAxICYmIHRhcmdldCA8PSBUT1RBTF9MRVZFTFMpIHtcbiAgICAgIGlmICh0YXJnZXQgPD0gdXNlclByb2dyZXNzLmhpZ2hlc3RVbmxvY2tlZExldmVsKSB7XG4gICAgICAgIG9uU2VsZWN0TGV2ZWwodGFyZ2V0KTtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGV2ZWwtc2VsZWN0LXRpdGxlXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctc2xhdGUtOTUwLzYwIGJhY2tkcm9wLWJsdXIteHMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgdy1mdWxsIG1heC13LTN4bCBtYXgtaC1bOTB2aF0gZmxleCBmbGV4LWNvbCBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwibGV2ZWwtc2VsZWN0LXRpdGxlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICAgICAgICBTZWxlY2Npb25hciBOaXZlbFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBkYXJrOnRleHQtc2xhdGUtNDAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57dXNlclByb2dyZXNzLnRvdGFsU3RhcnN9IGVzdHJlbGxhcyBjb25zZWd1aWRhczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPk5pdmVsIG3DoXhpbW8gZGVzYmxvcXVlYWRvOiB7dXNlclByb2dyZXNzLmhpZ2hlc3RVbmxvY2tlZExldmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS03MDAgZGFyazpob3Zlcjp0ZXh0LXNsYXRlLTIwMCBob3ZlcjpiZy1zbGF0ZS0xMDAgZGFyazpob3ZlcjpiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNlcnJhciBtb2RhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYWIgQ29udHJvbHMgKEZ1bmN0aW9uYWwgYnV0dG9ucywgY2xlYW4gc2VnbWVudGVkIHN0eWxlKSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTIgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHAtMSBiZy1zbGF0ZS0xMDAgZGFyazpiZy1zbGF0ZS04MDAvNjAgcm91bmRlZC1sZyB3LW1heFwiPlxuICAgICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17dGFiLmtleX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIodGFiLmtleSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IHRhYi5rZXlcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgZGFyazpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIHNoYWRvdy14cydcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUXVpY2sganVtcCBpbnB1dCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTIuNSBiZy1zbGF0ZS01MCBkYXJrOmJnLXNsYXRlLTg1MC81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgdGV4dC14c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIGRhcms6dGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgIE1vc3RyYW5kbyB7ZmlsdGVyZWRMZXZlbHMubGVuZ3RofSBuaXZlbGVzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVKdW1wfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgZGFyazp0ZXh0LXNsYXRlLTQwMFwiPklyIGFsIG5pdmVsOjwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgIG1heD17VE9UQUxfTEVWRUxTfVxuICAgICAgICAgICAgICB2YWx1ZT17anVtcElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEp1bXBJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgMS0ke1RPVEFMX0xFVkVMU31gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE4IHB4LTIgcHktMSBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDAgcm91bmRlZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC14cyB0ZXh0LWNlbnRlciBmb250LW1vbm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIuNSBweS0xIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LXNsYXRlLTkwMCByb3VuZGVkIGZvbnQtbWVkaXVtIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEdyaWQgb2YgTGV2ZWxzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBvdmVyZmxvdy15LWF1dG8gZmxleC0xIGdyaWQgZ3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTUgbWQ6Z3JpZC1jb2xzLTYgbGc6Z3JpZC1jb2xzLTggZ2FwLTNcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRMZXZlbHMubWFwKChsdmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzVW5sb2NrZWQgPSBsdmwgPD0gdXNlclByb2dyZXNzLmhpZ2hlc3RVbmxvY2tlZExldmVsO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gbHZsID09PSBjdXJyZW50TGV2ZWxJZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gdXNlclByb2dyZXNzLmNvbXBsZXRlZExldmVsc1tsdmxdO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnMgPSBwcm9ncmVzcz8uc3RhcnMgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBnZXREaWZmaWN1bHR5KGx2bCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2x2bH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzVW5sb2NrZWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25TZWxlY3RMZXZlbChsdmwpO1xuICAgICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zIHJvdW5kZWQteGwgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICBpc0N1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXNreS01MDAgYmctc2t5LTUwLzcwIGRhcms6Ymctc2t5LTk1MC80MCByaW5nLTIgcmluZy1za3ktNTAwLzIwJ1xuICAgICAgICAgICAgICAgICAgICA6IGlzVW5sb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9ncmVzcz8uY29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLWVtZXJhbGQtOTAwLzYwIGJnLWVtZXJhbGQtNTAvMzAgZGFyazpiZy1lbWVyYWxkLTk1MC8yMCBob3Zlcjpib3JkZXItZW1lcmFsZC00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTQwMCBob3ZlcjpzaGFkb3cteHMnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1zbGF0ZS0yMDAvNTAgZGFyazpib3JkZXItc2xhdGUtODAwLzQwIGJnLXNsYXRlLTEwMC81MCBkYXJrOmJnLXNsYXRlLTg1MC80MCBvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBMZXZlbCBOdW1iZXIgKi99XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1tb25vIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAge2x2bH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICB7LyogU3RhcnMgLyBMb2NrIHN0YXR1cyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC00XCI+XG4gICAgICAgICAgICAgICAgICB7IWlzVW5sb2NrZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtc2xhdGUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgM10ubWFwKChzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMyBoLTMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzIDw9IHN0YXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWFtYmVyLTQwMCBmaWxsLWFtYmVyLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtMzAwIGRhcms6dGV4dC1zbGF0ZS02MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIERpZmZpY3VsdHkgc3VidGl0bGUgKi99XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDAgZGFyazp0ZXh0LXNsYXRlLTUwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICB7Z2V0RGlmZmljdWx0eUxhYmVsKGRpZmZpY3VsdHkpLnNsaWNlKDAsIDQpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==