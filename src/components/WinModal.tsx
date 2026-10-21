const React = __vite__cjsImport0_react; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=206ea61b";
import { Star, RotateCcw, ArrowRight, Grid } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import { TOTAL_LEVELS } from "/src/game/levels.ts";
var _jsxFileName = "/app/applet/src/components/WinModal.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const WinModal = ({ isOpen, levelId, moves, targetMoves, stars, onNextLevel, onReplay, onOpenLevelSelect }) => {
	useEffect(() => {
		if (isOpen) {
			// Fire confetti from both sides
			confetti({
				particleCount: 60,
				spread: 70,
				origin: {
					y: .65,
					x: .3
				},
				colors: [
					"#06B6D4",
					"#EF4444",
					"#EAB308",
					"#10B981",
					"#8B5CF6"
				]
			});
			confetti({
				particleCount: 60,
				spread: 70,
				origin: {
					y: .65,
					x: .7
				},
				colors: [
					"#06B6D4",
					"#EF4444",
					"#EAB308",
					"#10B981",
					"#8B5CF6"
				]
			});
		}
	}, [isOpen]);
	if (!isOpen) return null;
	const hasNext = levelId < TOTAL_LEVELS && levelId > 0;
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "win-modal-title",
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden",
			children: [
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-center gap-2 mb-4",
					children: [
						1,
						2,
						3
					].map((starNum) => {
						const isEarned = starNum <= stars;
						return /* @__PURE__ */ _jsxDEV("div", {
							className: `p-2 rounded-full transition-transform duration-300 ${isEarned ? "text-amber-400 scale-110" : "text-slate-300 dark:text-slate-700"}`,
							children: /* @__PURE__ */ _jsxDEV(Star, { className: `w-9 h-9 ${isEarned ? "fill-amber-400 stroke-amber-500" : "stroke-current"}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 17
							}, this)
						}, starNum, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					id: "win-modal-title",
					className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display",
					children: "¡Nivel Completado!"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-3 py-3 px-6 bg-slate-50 dark:bg-slate-850 rounded-xl w-full flex items-center justify-around text-slate-700 dark:text-slate-300",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-[11px] text-slate-400 dark:text-slate-500",
								children: "Movimientos"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xl font-bold font-mono tabular-nums",
								children: moves
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { className: "h-8 w-px bg-slate-200 dark:bg-slate-700" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-[11px] text-slate-400 dark:text-slate-500",
								children: "Objetivo"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xl font-bold font-mono tabular-nums text-slate-500",
								children: ["~", targetMoves]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full mt-6 space-y-2.5",
					children: [hasNext ? /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onNextLevel,
						className: "w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Siguiente Nivel" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 13
					}, this) : /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onOpenLevelSelect,
						className: "w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer",
						children: /* @__PURE__ */ _jsxDEV("span", { children: "¡Has completado todos los niveles! Ver Lista" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 w-full",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onReplay,
							className: "flex-1 py-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Repetir" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenLevelSelect,
							className: "flex-1 py-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ _jsxDEV(Grid, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Niveles" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGlCQUFpQjtBQUNqQyxPQUFPLGNBQWM7QUFDckIsU0FBUyxNQUFNLFdBQVcsWUFBWSxZQUFZO0FBQ2xELFNBQVMsb0JBQW9COzs7QUFhN0IsT0FBTyxNQUFNLFlBQXFDLEVBQ2hELFFBQ0EsU0FDQSxPQUNBLGFBQ0EsT0FDQSxhQUNBLFVBQ0Esd0JBQ0k7Q0FDSixnQkFBZ0I7RUFDZCxJQUFJLFFBQVE7O0dBRVYsU0FBUztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsUUFBUTtLQUFFLEdBQUc7S0FBTSxHQUFHO0lBQUk7SUFDMUIsUUFBUTtLQUFDO0tBQVc7S0FBVztLQUFXO0tBQVc7SUFBUztHQUNoRSxDQUFDO0dBQ0QsU0FBUztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsUUFBUTtLQUFFLEdBQUc7S0FBTSxHQUFHO0lBQUk7SUFDMUIsUUFBUTtLQUFDO0tBQVc7S0FBVztLQUFXO0tBQVc7SUFBUztHQUNoRSxDQUFDO0VBQ0g7Q0FDRixHQUFHLENBQUMsTUFBTSxDQUFDO0NBRVgsSUFBSSxDQUFDLFFBQVEsT0FBTztDQUVwQixNQUFNLFVBQVUsVUFBVSxnQkFBZ0IsVUFBVTtDQUVwRCxPQUNFLHdCQUFDLE9BQUQ7RUFDRSxNQUFLO0VBQ0wsY0FBVztFQUNYLG1CQUFnQjtFQUNoQixXQUFVO1lBRVYsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZjtJQUVFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG1IQUFvSDs7Ozs7SUFHbkksd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDWjtNQUFDO01BQUc7TUFBRztLQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVk7TUFDMUIsTUFBTSxXQUFXLFdBQVc7TUFDNUIsT0FDRSx3QkFBQyxPQUFEO09BRUUsV0FBVyxzREFDVCxXQUNJLDZCQUNBO2lCQUdOLHdCQUFDLE1BQUQsRUFDRSxXQUFXLFdBQ1QsV0FBVyxvQ0FBb0MsbUJBRWxEOzs7OztNQUNFLEdBWkU7Ozs7YUFZRjtLQUVULENBQUM7SUFDRTs7Ozs7SUFHTCx3QkFBQyxNQUFEO0tBQ0UsSUFBRztLQUNILFdBQVU7ZUFDWDtJQUVHOzs7OztJQUdKLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUFpRDtPQUUzRDs7OztpQkFDTix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFDYjtPQUNHOzs7O2VBQ0g7Ozs7OztNQUNMLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDBDQUEyQzs7Ozs7TUFDMUQsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBaUQ7T0FFM0Q7Ozs7aUJBQ04sd0JBQUMsUUFBRDtRQUFNLFdBQVU7a0JBQWhCLENBQTBFLEtBQ3RFLFdBQ0U7Ozs7O2VBQ0g7Ozs7OztLQUNGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0csVUFDQyx3QkFBQyxVQUFEO01BQ0UsTUFBSztNQUNMLFNBQVM7TUFDVCxXQUFVO2dCQUhaLENBS0Usd0JBQUMsUUFBRCxZQUFNLGtCQUFxQjs7OztnQkFDM0Isd0JBQUMsWUFBRCxFQUFZLFdBQVUsVUFBVzs7OztjQUMzQjs7Ozs7Z0JBRVIsd0JBQUMsVUFBRDtNQUNFLE1BQUs7TUFDTCxTQUFTO01BQ1QsV0FBVTtnQkFFVix3QkFBQyxRQUFELFlBQU0sK0NBQWtEOzs7OztLQUNsRDs7OztlQUdWLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsV0FBVTtpQkFIWixDQUtFLHdCQUFDLFdBQUQsRUFBVyxXQUFVLGNBQWU7Ozs7aUJBQ3BDLHdCQUFDLFFBQUQsWUFBTSxVQUFhOzs7O2VBQ2I7Ozs7O2dCQUNSLHdCQUFDLFVBQUQ7T0FDRSxNQUFLO09BQ0wsU0FBUztPQUNULFdBQVU7aUJBSFosQ0FLRSx3QkFBQyxNQUFELEVBQU0sV0FBVSxjQUFlOzs7O2lCQUMvQix3QkFBQyxRQUFELFlBQU0sVUFBYTs7OztlQUNiOzs7OztjQUNMOzs7OzthQUNGOzs7Ozs7R0FDRjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiV2luTW9kYWwudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29uZmV0dGkgZnJvbSAnY2FudmFzLWNvbmZldHRpJztcbmltcG9ydCB7IFN0YXIsIFJvdGF0ZUNjdywgQXJyb3dSaWdodCwgR3JpZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBUT1RBTF9MRVZFTFMgfSBmcm9tICcuLi9nYW1lL2xldmVscy50cyc7XG5cbmludGVyZmFjZSBXaW5Nb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBsZXZlbElkOiBudW1iZXI7XG4gIG1vdmVzOiBudW1iZXI7XG4gIHRhcmdldE1vdmVzOiBudW1iZXI7XG4gIHN0YXJzOiBudW1iZXI7XG4gIG9uTmV4dExldmVsOiAoKSA9PiB2b2lkO1xuICBvblJlcGxheTogKCkgPT4gdm9pZDtcbiAgb25PcGVuTGV2ZWxTZWxlY3Q6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBXaW5Nb2RhbDogUmVhY3QuRkM8V2luTW9kYWxQcm9wcz4gPSAoe1xuICBpc09wZW4sXG4gIGxldmVsSWQsXG4gIG1vdmVzLFxuICB0YXJnZXRNb3ZlcyxcbiAgc3RhcnMsXG4gIG9uTmV4dExldmVsLFxuICBvblJlcGxheSxcbiAgb25PcGVuTGV2ZWxTZWxlY3QsXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLy8gRmlyZSBjb25mZXR0aSBmcm9tIGJvdGggc2lkZXNcbiAgICAgIGNvbmZldHRpKHtcbiAgICAgICAgcGFydGljbGVDb3VudDogNjAsXG4gICAgICAgIHNwcmVhZDogNzAsXG4gICAgICAgIG9yaWdpbjogeyB5OiAwLjY1LCB4OiAwLjMgfSxcbiAgICAgICAgY29sb3JzOiBbJyMwNkI2RDQnLCAnI0VGNDQ0NCcsICcjRUFCMzA4JywgJyMxMEI5ODEnLCAnIzhCNUNGNiddLFxuICAgICAgfSk7XG4gICAgICBjb25mZXR0aSh7XG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDYwLFxuICAgICAgICBzcHJlYWQ6IDcwLFxuICAgICAgICBvcmlnaW46IHsgeTogMC42NSwgeDogMC43IH0sXG4gICAgICAgIGNvbG9yczogWycjMDZCNkQ0JywgJyNFRjQ0NDQnLCAnI0VBQjMwOCcsICcjMTBCOTgxJywgJyM4QjVDRjYnXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYXNOZXh0ID0gbGV2ZWxJZCA8IFRPVEFMX0xFVkVMUyAmJiBsZXZlbElkID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwid2luLW1vZGFsLXRpdGxlXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctc2xhdGUtOTUwLzYwIGJhY2tkcm9wLWJsdXIteHMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgdy1mdWxsIG1heC13LW1kIHAtNiBzbTpwLTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgey8qIERlY29yYXRpdmUgc3VidGxlIGJhY2tncm91bmQgYXVyYSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTI0IGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy00OCBoLTQ4IGJnLWVtZXJhbGQtNTAwLzEwIHJvdW5kZWQtZnVsbCBibHVyLTJ4bCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblxuICAgICAgICB7LyogU3RhcnMgRGlzcGxheSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBtYi00XCI+XG4gICAgICAgICAge1sxLCAyLCAzXS5tYXAoKHN0YXJOdW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRWFybmVkID0gc3Rhck51bSA8PSBzdGFycztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3N0YXJOdW19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgIGlzRWFybmVkXG4gICAgICAgICAgICAgICAgICAgID8gJ3RleHQtYW1iZXItNDAwIHNjYWxlLTExMCdcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTcwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTkgaC05ICR7XG4gICAgICAgICAgICAgICAgICAgIGlzRWFybmVkID8gJ2ZpbGwtYW1iZXItNDAwIHN0cm9rZS1hbWJlci01MDAnIDogJ3N0cm9rZS1jdXJyZW50J1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVmljdG9yeSBUaXRsZSAqL31cbiAgICAgICAgPGgyXG4gICAgICAgICAgaWQ9XCJ3aW4tbW9kYWwtdGl0bGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1kaXNwbGF5XCJcbiAgICAgICAgPlxuICAgICAgICAgIMKhTml2ZWwgQ29tcGxldGFkbyFcbiAgICAgICAgPC9oMj5cblxuICAgICAgICB7LyogUmVzdWx0IEJyZWFrZG93biAoQ2xlYW4gdW5ib3hlZCB0ZXh0IG1ldGFkYXRhKSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHB5LTMgcHgtNiBiZy1zbGF0ZS01MCBkYXJrOmJnLXNsYXRlLTg1MCByb3VuZGVkLXhsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCB0ZXh0LXNsYXRlLTcwMCBkYXJrOnRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDAgZGFyazp0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICBNb3ZpbWllbnRvc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgZm9udC1tb25vIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICB7bW92ZXN9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggdy1weCBiZy1zbGF0ZS0yMDAgZGFyazpiZy1zbGF0ZS03MDBcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIGRhcms6dGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgT2JqZXRpdm9cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGZvbnQtbW9ubyB0YWJ1bGFyLW51bXMgdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgfnt0YXJnZXRNb3Zlc31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFByaW1hcnkgYW5kIFNlY29uZGFyeSBDVEEgQnV0dG9ucyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNiBzcGFjZS15LTIuNVwiPlxuICAgICAgICAgIHtoYXNOZXh0ID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25OZXh0TGV2ZWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHB4LTQgYmctc2t5LTYwMCBob3ZlcjpiZy1za3ktNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPlNpZ3VpZW50ZSBOaXZlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuTGV2ZWxTZWxlY3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHB4LTQgYmctc2t5LTYwMCBob3ZlcjpiZy1za3ktNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPsKhSGFzIGNvbXBsZXRhZG8gdG9kb3MgbG9zIG5pdmVsZXMhIFZlciBMaXN0YTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25SZXBsYXl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTUwIGRhcms6aG92ZXI6Ymctc2xhdGUtODAwIHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0zMDAgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Um90YXRlQ2N3IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+UmVwZXRpcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuTGV2ZWxTZWxlY3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTUwIGRhcms6aG92ZXI6Ymctc2xhdGUtODAwIHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0zMDAgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPk5pdmVsZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=