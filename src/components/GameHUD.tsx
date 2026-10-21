const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { RotateCcw, Undo2, Lightbulb, PlusCircle, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import { getDifficultyLabel } from "/src/game/levels.ts";
var _jsxFileName = "/app/applet/src/components/GameHUD.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const GameHUD = ({ levelTitle, difficulty, colorCount, emptyCount, moves, targetMoves, canUndo, isStalemate, onUndo, onReset, onHint, onAddTube, isSolvingHint, extraTubesUsed }) => {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "w-full max-w-4xl mx-auto px-4 pt-4 pb-2",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h1", {
					className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display",
					children: levelTitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1",
					children: [
						/* @__PURE__ */ _jsxDEV("span", { children: getDifficultyLabel(difficulty) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							"aria-hidden": "true",
							children: "·"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: [colorCount, " colores distintos"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							"aria-hidden": "true",
							children: "·"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: [emptyCount + extraTubesUsed, " tubos libres"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "text-right flex items-baseline sm:flex-col sm:items-end justify-between sm:justify-start gap-1",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs text-slate-500 dark:text-slate-400",
						children: "Movimientos"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono tabular-nums",
						children: [
							moves,
							" ",
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-normal text-slate-500 dark:text-slate-400",
								children: ["/ objetivo ~", targetMoves]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			isStalemate && /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-center justify-between gap-3 text-amber-900 dark:text-amber-200",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2 text-xs sm:text-sm",
					children: [/* @__PURE__ */ _jsxDEV(AlertCircle, { className: "w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Sin movimientos válidos posibles. Puedes deshacer o agregar un tubo extra." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					type: "button",
					onClick: onUndo,
					className: "px-2.5 py-1 text-xs font-medium rounded bg-amber-600 text-white hover:bg-amber-500 transition-colors whitespace-nowrap cursor-pointer shrink-0",
					children: "Deshacer jugada"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-center gap-2 sm:gap-4 mt-3 flex-wrap",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onUndo,
						disabled: !canUndo,
						className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${canUndo ? "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-xs active:scale-95" : "opacity-40 text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed"}`,
						title: "Deshacer último movimiento",
						children: [/* @__PURE__ */ _jsxDEV(Undo2, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Deshacer" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onReset,
						className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-xs transition-all active:scale-95 cursor-pointer",
						title: "Reiniciar el nivel actual",
						children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Reiniciar" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onHint,
						disabled: isSolvingHint,
						className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 shadow-xs transition-all active:scale-95 cursor-pointer",
						title: "Obtener pista del siguiente movimiento óptimo",
						children: [/* @__PURE__ */ _jsxDEV(Lightbulb, { className: `w-3.5 h-3.5 ${isSolvingHint ? "animate-spin" : ""}` }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: isSolvingHint ? "Calculando..." : "Pista" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onAddTube,
						disabled: extraTubesUsed >= 2,
						className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${extraTubesUsed < 2 ? "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/40 shadow-xs active:scale-95" : "opacity-40 text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed"}`,
						title: "Añadir un tubo vacío extra para ayudarte",
						children: [/* @__PURE__ */ _jsxDEV(PlusCircle, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
							"+1 Tubo (",
							2 - extraTubesUsed,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsV0FBVyxPQUFPLFdBQVcsWUFBWSxtQkFBbUI7QUFDckUsU0FBcUIsMEJBQTBCOzs7QUFtQi9DLE9BQU8sTUFBTSxXQUFtQyxFQUM5QyxZQUNBLFlBQ0EsWUFDQSxZQUNBLE9BQ0EsYUFDQSxTQUNBLGFBQ0EsUUFDQSxTQUNBLFFBQ0EsV0FDQSxlQUNBLHFCQUNJO0NBQ0osT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUFmO0dBRUUsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQsYUFDRSx3QkFBQyxNQUFEO0tBQUksV0FBVTtlQUNYO0lBQ0M7Ozs7Y0FDSix3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsUUFBRCxZQUFPLG1CQUFtQixVQUFVLEVBQVE7Ozs7O01BQzVDLHdCQUFDLFFBQUQ7T0FBTSxlQUFZO2lCQUFPO01BQU87Ozs7O01BQ2hDLHdCQUFDLFFBQUQsYUFBTyxZQUFXLG9CQUF3Qjs7Ozs7TUFDMUMsd0JBQUMsUUFBRDtPQUFNLGVBQVk7aUJBQU87TUFBTzs7Ozs7TUFDaEMsd0JBQUMsUUFBRCxhQUFPLGFBQWEsZ0JBQWUsZUFBbUI7Ozs7O0tBQ25EOzs7OztZQUNGOzs7O2NBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLFFBQUQ7TUFBTSxXQUFVO2dCQUE2QztLQUFpQjs7OztlQUM5RSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZjtPQUNHO09BQU87T0FDUix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBaEIsQ0FBeUUsZ0JBQzFELFdBQ1Q7Ozs7OztNQUNIOzs7OzthQUNGOzs7OztZQUNGOzs7Ozs7R0FHSixlQUNDLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWYsQ0FDRSx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsYUFBRCxFQUFhLFdBQVUsc0RBQXVEOzs7O2VBQzlFLHdCQUFDLFFBQUQsWUFBTSw2RUFBZ0Y7Ozs7YUFDbkY7Ozs7O2NBQ0wsd0JBQUMsVUFBRDtLQUNFLE1BQUs7S0FDTCxTQUFTO0tBQ1QsV0FBVTtlQUNYO0lBRU87Ozs7WUFDTDs7Ozs7O0dBSVAsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZjtLQUVFLHdCQUFDLFVBQUQ7TUFDRSxNQUFLO01BQ0wsU0FBUztNQUNULFVBQVUsQ0FBQztNQUNYLFdBQVcsNkdBQ1QsVUFDSSw2S0FDQTtNQUVOLE9BQU07Z0JBVFIsQ0FXRSx3QkFBQyxPQUFELEVBQU8sV0FBVSxjQUFlOzs7O2dCQUNoQyx3QkFBQyxRQUFELFlBQU0sV0FBYzs7OztjQUNkOzs7Ozs7S0FHUix3QkFBQyxVQUFEO01BQ0UsTUFBSztNQUNMLFNBQVM7TUFDVCxXQUFVO01BQ1YsT0FBTTtnQkFKUixDQU1FLHdCQUFDLFdBQUQsRUFBVyxXQUFVLGNBQWU7Ozs7Z0JBQ3BDLHdCQUFDLFFBQUQsWUFBTSxZQUFlOzs7O2NBQ2Y7Ozs7OztLQUdSLHdCQUFDLFVBQUQ7TUFDRSxNQUFLO01BQ0wsU0FBUztNQUNULFVBQVU7TUFDVixXQUFVO01BQ1YsT0FBTTtnQkFMUixDQU9FLHdCQUFDLFdBQUQsRUFBVyxXQUFXLGVBQWUsZ0JBQWdCLGlCQUFpQixLQUFPOzs7O2dCQUM3RSx3QkFBQyxRQUFELFlBQU8sZ0JBQWdCLGtCQUFrQixRQUFjOzs7O2NBQ2pEOzs7Ozs7S0FHUix3QkFBQyxVQUFEO01BQ0UsTUFBSztNQUNMLFNBQVM7TUFDVCxVQUFVLGtCQUFrQjtNQUM1QixXQUFXLDZHQUNULGlCQUFpQixJQUNiLHVLQUNBO01BRU4sT0FBTTtnQkFUUixDQVdFLHdCQUFDLFlBQUQsRUFBWSxXQUFVLGNBQWU7Ozs7Z0JBQ3JDLHdCQUFDLFFBQUQ7T0FBTTtPQUFVLElBQUk7T0FBZTtNQUFPOzs7O2NBQ3BDOzs7Ozs7SUFDTDs7Ozs7O0VBQ0Y7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkdhbWVIVUQudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3RhdGVDY3csIFVuZG8yLCBMaWdodGJ1bGIsIFBsdXNDaXJjbGUsIEFsZXJ0Q2lyY2xlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IERpZmZpY3VsdHksIGdldERpZmZpY3VsdHlMYWJlbCB9IGZyb20gJy4uL2dhbWUvbGV2ZWxzLnRzJztcblxuaW50ZXJmYWNlIEdhbWVIVURQcm9wcyB7XG4gIGxldmVsVGl0bGU6IHN0cmluZztcbiAgZGlmZmljdWx0eTogRGlmZmljdWx0eTtcbiAgY29sb3JDb3VudDogbnVtYmVyO1xuICBlbXB0eUNvdW50OiBudW1iZXI7XG4gIG1vdmVzOiBudW1iZXI7XG4gIHRhcmdldE1vdmVzOiBudW1iZXI7XG4gIGNhblVuZG86IGJvb2xlYW47XG4gIGlzU3RhbGVtYXRlOiBib29sZWFuO1xuICBvblVuZG86ICgpID0+IHZvaWQ7XG4gIG9uUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uSGludDogKCkgPT4gdm9pZDtcbiAgb25BZGRUdWJlOiAoKSA9PiB2b2lkO1xuICBpc1NvbHZpbmdIaW50OiBib29sZWFuO1xuICBleHRyYVR1YmVzVXNlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgR2FtZUhVRDogUmVhY3QuRkM8R2FtZUhVRFByb3BzPiA9ICh7XG4gIGxldmVsVGl0bGUsXG4gIGRpZmZpY3VsdHksXG4gIGNvbG9yQ291bnQsXG4gIGVtcHR5Q291bnQsXG4gIG1vdmVzLFxuICB0YXJnZXRNb3ZlcyxcbiAgY2FuVW5kbyxcbiAgaXNTdGFsZW1hdGUsXG4gIG9uVW5kbyxcbiAgb25SZXNldCxcbiAgb25IaW50LFxuICBvbkFkZFR1YmUsXG4gIGlzU29sdmluZ0hpbnQsXG4gIGV4dHJhVHViZXNVc2VkLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvIHB4LTQgcHQtNCBwYi0yXCI+XG4gICAgICB7LyogTGV2ZWwgVGl0bGUgJiBFZGl0b3JpYWwgTWV0YWRhdGEgKE5vIHBpbGxzLCBjbGVhbiBzZXBhcmF0b3JzKSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgcGItM1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICAgICAge2xldmVsVGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS01MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBtdC0xXCI+XG4gICAgICAgICAgICA8c3Bhbj57Z2V0RGlmZmljdWx0eUxhYmVsKGRpZmZpY3VsdHkpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e2NvbG9yQ291bnR9IGNvbG9yZXMgZGlzdGludG9zPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57ZW1wdHlDb3VudCArIGV4dHJhVHViZXNVc2VkfSB0dWJvcyBsaWJyZXM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNb3ZlIENvdW50ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBmbGV4IGl0ZW1zLWJhc2VsaW5lIHNtOmZsZXgtY29sIHNtOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gc206anVzdGlmeS1zdGFydCBnYXAtMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgZGFyazp0ZXh0LXNsYXRlLTQwMFwiPk1vdmltaWVudG9zPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1tb25vIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAge21vdmVzfXsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtc2xhdGUtNTAwIGRhcms6dGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgICAgLyBvYmpldGl2byB+e3RhcmdldE1vdmVzfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRGVhZGxvY2sgLyBTdGFsZW1hdGUgYmFubmVyIGlmIG5vIHZhbGlkIG1vdmVzIGxlZnQgKi99XG4gICAgICB7aXNTdGFsZW1hdGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgcC0zIHJvdW5kZWQtbGcgYmctYW1iZXItNTAgZGFyazpiZy1hbWJlci05NTAvMzAgYm9yZGVyIGJvcmRlci1hbWJlci0yMDAgZGFyazpib3JkZXItYW1iZXItODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyB0ZXh0LWFtYmVyLTkwMCBkYXJrOnRleHQtYW1iZXItMjAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHNtOnRleHQtc21cIj5cbiAgICAgICAgICAgIDxBbGVydENpcmNsZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNjAwIGRhcms6dGV4dC1hbWJlci00MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+U2luIG1vdmltaWVudG9zIHbDoWxpZG9zIHBvc2libGVzLiBQdWVkZXMgZGVzaGFjZXIgbyBhZ3JlZ2FyIHVuIHR1Ym8gZXh0cmEuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25VbmRvfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkIGJnLWFtYmVyLTYwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWFtYmVyLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBjdXJzb3ItcG9pbnRlciBzaHJpbmstMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVzaGFjZXIganVnYWRhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIEFjdGlvbiBDb250cm9scyBCYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHNtOmdhcC00IG10LTMgZmxleC13cmFwXCI+XG4gICAgICAgIHsvKiBVbmRvIE1vdmUgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtvblVuZG99XG4gICAgICAgICAgZGlzYWJsZWQ9eyFjYW5VbmRvfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLWxnIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgY2FuVW5kb1xuICAgICAgICAgICAgICA/ICdiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTcwMCBkYXJrOnRleHQtc2xhdGUtMjAwIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTUwIGRhcms6aG92ZXI6Ymctc2xhdGUtNzUwIHNoYWRvdy14cyBhY3RpdmU6c2NhbGUtOTUnXG4gICAgICAgICAgICAgIDogJ29wYWNpdHktNDAgdGV4dC1zbGF0ZS00MDAgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgY3Vyc29yLW5vdC1hbGxvd2VkJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIHRpdGxlPVwiRGVzaGFjZXIgw7psdGltbyBtb3ZpbWllbnRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxVbmRvMiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPHNwYW4+RGVzaGFjZXI8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBSZXNldCBMZXZlbCAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS03MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtNTAgZGFyazpob3ZlcjpiZy1zbGF0ZS03NTAgc2hhZG93LXhzIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTpzY2FsZS05NSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgdGl0bGU9XCJSZWluaWNpYXIgZWwgbml2ZWwgYWN0dWFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxSb3RhdGVDY3cgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgIDxzcGFuPlJlaW5pY2lhcjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIEhpbnQgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkhpbnR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzU29sdmluZ0hpbnR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgYmctYW1iZXItNTAgZGFyazpiZy1hbWJlci05NTAvNDAgdGV4dC1hbWJlci03MDAgZGFyazp0ZXh0LWFtYmVyLTMwMCBib3JkZXIgYm9yZGVyLWFtYmVyLTIwMCBkYXJrOmJvcmRlci1hbWJlci04MDAgaG92ZXI6YmctYW1iZXItMTAwIGRhcms6aG92ZXI6YmctYW1iZXItOTAwLzQwIHNoYWRvdy14cyB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIHRpdGxlPVwiT2J0ZW5lciBwaXN0YSBkZWwgc2lndWllbnRlIG1vdmltaWVudG8gw7NwdGltb1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TGlnaHRidWxiIGNsYXNzTmFtZT17YHctMy41IGgtMy41ICR7aXNTb2x2aW5nSGludCA/ICdhbmltYXRlLXNwaW4nIDogJyd9YH0gLz5cbiAgICAgICAgICA8c3Bhbj57aXNTb2x2aW5nSGludCA/ICdDYWxjdWxhbmRvLi4uJyA6ICdQaXN0YSd9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogRXh0cmEgVHViZSAoKzEgRmxhc2spICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17b25BZGRUdWJlfVxuICAgICAgICAgIGRpc2FibGVkPXtleHRyYVR1YmVzVXNlZCA+PSAyfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLWxnIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgZXh0cmFUdWJlc1VzZWQgPCAyXG4gICAgICAgICAgICAgID8gJ2JnLXNreS01MCBkYXJrOmJnLXNreS05NTAvNDAgdGV4dC1za3ktNzAwIGRhcms6dGV4dC1za3ktMzAwIGJvcmRlci1za3ktMjAwIGRhcms6Ym9yZGVyLXNreS04MDAgaG92ZXI6Ymctc2t5LTEwMCBkYXJrOmhvdmVyOmJnLXNreS05MDAvNDAgc2hhZG93LXhzIGFjdGl2ZTpzY2FsZS05NSdcbiAgICAgICAgICAgICAgOiAnb3BhY2l0eS00MCB0ZXh0LXNsYXRlLTQwMCBib3JkZXItc2xhdGUtMjAwIGRhcms6Ym9yZGVyLXNsYXRlLTgwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgdGl0bGU9XCJBw7FhZGlyIHVuIHR1Ym8gdmFjw61vIGV4dHJhIHBhcmEgYXl1ZGFydGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPFBsdXNDaXJjbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgIDxzcGFuPisxIFR1Ym8gKHsyIC0gZXh0cmFUdWJlc1VzZWR9KTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=