const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { X, CheckCircle2, Eye, Undo2, Lightbulb, PlusCircle } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import { WATER_COLORS } from "/src/game/colors.ts";
var _jsxFileName = "/app/applet/src/components/HelpModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const HelpModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	const sampleColors = Object.values(WATER_COLORS).slice(0, 6);
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "help-modal-title",
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto shadow-2xl",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800",
					children: [/* @__PURE__ */ _jsxDEV("h2", {
						id: "help-modal-title",
						className: "text-xl font-bold text-slate-900 dark:text-white font-display",
						children: "Cómo Jugar a AquaSort"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
						"aria-label": "Cerrar ayuda",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "font-semibold text-slate-900 dark:text-white text-base mb-1",
							children: "Objetivo"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("p", { children: "Clasifica los líquidos de colores en los tubos hasta que cada tubo contenga un único color uniforme o quede totalmente vacío." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-semibold text-slate-900 dark:text-white text-base",
									children: "Reglas de Vertido"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 54,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Haz clic en un tubo para seleccionarlo (se elevará), luego haz clic en otro tubo de destino para verter." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 55,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
										"Solo puedes verter si el tubo de destino tiene espacio libre ",
										/* @__PURE__ */ _jsxDEV("strong", { children: "Y" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 62,
											columnNumber: 78
										}, this),
										" su líquido superior es del ",
										/* @__PURE__ */ _jsxDEV("strong", { children: "mismo color" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 62,
											columnNumber: 124
										}, this),
										" que el que viertes (o si el tubo de destino está vacío)."
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/80 dark:border-slate-800",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 mb-2 font-semibold text-slate-900 dark:text-white",
									children: [/* @__PURE__ */ _jsxDEV(Eye, { className: "w-4 h-4 text-sky-600 dark:text-sky-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Colores Distinguibles y Modo Accesible" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-500 dark:text-slate-400 mb-3",
									children: "Cada color posee un matiz de alto contraste y su propio símbolo único (estrella, gota, corazón, etc.) para que jamás se confundan, incluso en condiciones de baja luminosidad o daltonismo."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
									children: sampleColors.map((c) => /* @__PURE__ */ _jsxDEV("div", {
										style: { backgroundColor: c.hex },
										className: "p-1.5 rounded-lg flex flex-col items-center justify-center text-white shadow-xs",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-base font-bold",
											children: c.symbol
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] truncate max-w-full font-medium",
											children: c.symbolName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 84,
											columnNumber: 19
										}, this)]
									}, c.id, true, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 17
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "font-semibold text-slate-900 dark:text-white text-base mb-2",
							children: "Herramientas de Ayuda"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1",
										children: [/* @__PURE__ */ _jsxDEV(Undo2, { className: "w-3.5 h-3.5 text-sky-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Deshacer" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Revierte tus movimientos paso a paso." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1",
										children: [/* @__PURE__ */ _jsxDEV(Lightbulb, { className: "w-3.5 h-3.5 text-amber-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 107,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Pista" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 108,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 106,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Calcula la siguiente jugada óptima." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1",
										children: [/* @__PURE__ */ _jsxDEV(PlusCircle, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 114,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "+1 Tubo" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 115,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Añade un tubo vacío adicional si te atascas." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6",
					children: /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onClose,
						className: "w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-sm",
						children: "Entendido, ¡a Jugar!"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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V0FBRCxFQUFXLFdBQVUsNkJBQThCOzs7O29CQUNuRCx3QkFBQyxRQUFELFlBQU0sUUFBVzs7OztrQkFDZDs7Ozs7bUJBQ0wsd0JBQUMsUUFBRCxZQUFNLHNDQUF5Qzs7OztpQkFDNUM7Ozs7OztRQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRDtVQUFLLFdBQVU7b0JBQWYsQ0FDRSx3QkFBQyxZQUFELEVBQVksV0FBVSwrQkFBZ0M7Ozs7b0JBQ3RELHdCQUFDLFFBQUQsWUFBTSxVQUFhOzs7O2tCQUNoQjs7Ozs7bUJBQ0wsd0JBQUMsUUFBRCxZQUFNLCtDQUFrRDs7OztpQkFDckQ7Ozs7OztPQUNGOzs7OztjQUNGOzs7OztLQUNGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNiLHdCQUFDLFVBQUQ7TUFDRSxNQUFLO01BQ0wsU0FBUztNQUNULFdBQVU7Z0JBQ1g7S0FFTzs7Ozs7SUFDTDs7Ozs7R0FDRjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiSGVscE1vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgQ2hlY2tDaXJjbGUyLCBFeWUsIFVuZG8yLCBMaWdodGJ1bGIsIFBsdXNDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgV0FURVJfQ09MT1JTIH0gZnJvbSAnLi4vZ2FtZS9jb2xvcnMudHMnO1xuXG5pbnRlcmZhY2UgSGVscE1vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBIZWxwTW9kYWw6IFJlYWN0LkZDPEhlbHBNb2RhbFByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzYW1wbGVDb2xvcnMgPSBPYmplY3QudmFsdWVzKFdBVEVSX0NPTE9SUykuc2xpY2UoMCwgNik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlbHAtbW9kYWwtdGl0bGVcIlxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBiZy1zbGF0ZS05NTAvNjAgYmFja2Ryb3AtYmx1ci14cyBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tMjAwXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGRhcms6Ym9yZGVyLXNsYXRlLTgwMCByb3VuZGVkLTJ4bCB3LWZ1bGwgbWF4LXctbGcgcC02IG1heC1oLVs5MHZoXSBvdmVyZmxvdy15LWF1dG8gc2hhZG93LTJ4bFwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0zIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgPGgyIGlkPVwiaGVscC1tb2RhbC10aXRsZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSBmb250LWRpc3BsYXlcIj5cbiAgICAgICAgICAgIEPDs21vIEp1Z2FyIGEgQXF1YVNvcnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS03MDAgZGFyazpob3Zlcjp0ZXh0LXNsYXRlLTIwMCBob3ZlcjpiZy1zbGF0ZS0xMDAgZGFyazpob3ZlcjpiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNlcnJhciBheXVkYVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSdWxlcyBCb2R5ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS00IHRleHQtc20gdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC1iYXNlIG1iLTFcIj5cbiAgICAgICAgICAgICAgT2JqZXRpdm9cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2xhc2lmaWNhIGxvcyBsw61xdWlkb3MgZGUgY29sb3JlcyBlbiBsb3MgdHVib3MgaGFzdGEgcXVlIGNhZGEgdHVibyBjb250ZW5nYSB1biDDum5pY28gY29sb3IgdW5pZm9ybWUgbyBxdWVkZSB0b3RhbG1lbnRlIHZhY8Otby5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIFJlZ2xhcyBkZSBWZXJ0aWRvXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC02MDAgZGFyazp0ZXh0LWVtZXJhbGQtNDAwIG10LTAuNSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIEhheiBjbGljIGVuIHVuIHR1Ym8gcGFyYSBzZWxlY2Npb25hcmxvIChzZSBlbGV2YXLDoSksIGx1ZWdvIGhheiBjbGljIGVuIG90cm8gdHVibyBkZSBkZXN0aW5vIHBhcmEgdmVydGVyLlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMi41XCI+XG4gICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwIGRhcms6dGV4dC1lbWVyYWxkLTQwMCBtdC0wLjUgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBTb2xvIHB1ZWRlcyB2ZXJ0ZXIgc2kgZWwgdHVibyBkZSBkZXN0aW5vIHRpZW5lIGVzcGFjaW8gbGlicmUgPHN0cm9uZz5ZPC9zdHJvbmc+IHN1IGzDrXF1aWRvIHN1cGVyaW9yIGVzIGRlbCA8c3Ryb25nPm1pc21vIGNvbG9yPC9zdHJvbmc+IHF1ZSBlbCBxdWUgdmllcnRlcyAobyBzaSBlbCB0dWJvIGRlIGRlc3Rpbm8gZXN0w6EgdmFjw61vKS5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sb3IgRGlzdGluY3Rpb24gJiBTeW1ib2xzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgYmctc2xhdGUtNTAgZGFyazpiZy1zbGF0ZS04NTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMC84MCBkYXJrOmJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMiBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8RXllIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1za3ktNjAwIGRhcms6dGV4dC1za3ktNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+Q29sb3JlcyBEaXN0aW5ndWlibGVzIHkgTW9kbyBBY2Nlc2libGU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBtYi0zXCI+XG4gICAgICAgICAgICAgIENhZGEgY29sb3IgcG9zZWUgdW4gbWF0aXogZGUgYWx0byBjb250cmFzdGUgeSBzdSBwcm9waW8gc8OtbWJvbG8gw7puaWNvIChlc3RyZWxsYSwgZ290YSwgY29yYXrDs24sIGV0Yy4pIHBhcmEgcXVlIGphbcOhcyBzZSBjb25mdW5kYW4sIGluY2x1c28gZW4gY29uZGljaW9uZXMgZGUgYmFqYSBsdW1pbm9zaWRhZCBvIGRhbHRvbmlzbW8uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTYgZ2FwLTJcIj5cbiAgICAgICAgICAgICAge3NhbXBsZUNvbG9ycy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMuaGV4IH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgc2hhZG93LXhzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkXCI+e2Muc3ltYm9sfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdHJ1bmNhdGUgbWF4LXctZnVsbCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICB7Yy5zeW1ib2xOYW1lfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFBvd2VyLXVwcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtYmFzZSBtYi0yXCI+XG4gICAgICAgICAgICAgIEhlcnJhbWllbnRhcyBkZSBBeXVkYVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMyBnYXAtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgPFVuZG8yIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtc2t5LTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZXNoYWNlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5SZXZpZXJ0ZSB0dXMgbW92aW1pZW50b3MgcGFzbyBhIHBhc28uPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICA8TGlnaHRidWxiIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYW1iZXItNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlBpc3RhPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPkNhbGN1bGEgbGEgc2lndWllbnRlIGp1Z2FkYSDDs3B0aW1hLjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgPFBsdXNDaXJjbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4rMSBUdWJvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPkHDsWFkZSB1biB0dWJvIHZhY8OtbyBhZGljaW9uYWwgc2kgdGUgYXRhc2Nhcy48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDbG9zZSBCdXR0b24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgYmctc2xhdGUtOTAwIGRhcms6Ymctd2hpdGUgdGV4dC13aGl0ZSBkYXJrOnRleHQtc2xhdGUtOTAwIGZvbnQtc2VtaWJvbGQgcm91bmRlZC14bCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tb3BhY2l0eSBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbnRlbmRpZG8sIMKhYSBKdWdhciFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=