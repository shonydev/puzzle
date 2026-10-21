const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { X, Play, Sliders } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import { COLOR_KEYS } from "/src/game/colors.ts";
var _jsxFileName = "/app/applet/src/components/CustomLevelModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const CustomLevelModal = ({ isOpen, onClose, onStartCustomGame }) => {
	const [colors, setColors] = useState(5);
	const [emptyTubes, setEmptyTubes] = useState(2);
	if (!isOpen) return null;
	const maxColors = Math.min(12, COLOR_KEYS.length);
	const handleSubmit = (e) => {
		e.preventDefault();
		onStartCustomGame(colors, emptyTubes);
		onClose();
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "custom-game-title",
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl overflow-hidden",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV(Sliders, { className: "w-5 h-5 text-sky-600 dark:text-sky-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						id: "custom-game-title",
						className: "text-lg font-bold text-slate-900 dark:text-white font-display",
						children: "Partida Personalizada"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					type: "button",
					onClick: onClose,
					className: "p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
					"aria-label": "Cerrar modal",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("form", {
				onSubmit: handleSubmit,
				className: "mt-5 space-y-5",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between text-sm font-medium mb-1.5",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-slate-700 dark:text-slate-300",
								children: "Cantidad de colores"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-sky-600 dark:text-sky-400 font-bold tabular-nums",
								children: [colors, " colores"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("input", {
							type: "range",
							min: 2,
							max: maxColors,
							value: colors,
							onChange: (e) => setColors(parseInt(e.target.value, 10)),
							className: "w-full accent-sky-600 cursor-pointer"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex justify-between text-[11px] text-slate-400 mt-1",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: "2 (Fácil)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "6 (Medio)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "12 (Experto)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between text-sm font-medium mb-2",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-slate-700 dark:text-slate-300",
							children: "Tubos vacíos libres"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "font-mono text-sky-600 dark:text-sky-400 font-bold tabular-nums",
							children: [emptyTubes, " tubos"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							1,
							2,
							3
						].map((num) => /* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: () => setEmptyTubes(num),
							className: `py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${emptyTubes === num ? "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800 shadow-xs" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`,
							children: [
								num,
								" ",
								num === 1 ? "Tubo" : "Tubos"
							]
						}, num, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "p-3 bg-slate-50 dark:bg-slate-850 rounded-xl text-xs text-slate-600 dark:text-slate-400 space-y-1",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ _jsxDEV("span", { children: "Total de tubos en juego:" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-bold text-slate-800 dark:text-slate-200",
								children: [colors + emptyTubes, " tubos"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ _jsxDEV("span", { children: "Algoritmo de garantía:" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-emerald-600 dark:text-emerald-400 font-medium",
								children: "100% Soluble verificado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "submit",
						className: "w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer",
						children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-4 h-4 fill-current" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Generar y Jugar" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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O1FBQU0sV0FBVTtrQkFBcUQ7T0FFL0Q7Ozs7ZUFDSDs7Ozs7Y0FDRjs7Ozs7O0tBR0wsd0JBQUMsVUFBRDtNQUNFLE1BQUs7TUFDTCxXQUFVO2dCQUZaLENBSUUsd0JBQUMsTUFBRCxFQUFNLFdBQVUsdUJBQXdCOzs7O2dCQUN4Qyx3QkFBQyxRQUFELFlBQU0sa0JBQXFCOzs7O2NBQ3JCOzs7Ozs7SUFDSjs7Ozs7V0FDSDs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQ3VzdG9tTGV2ZWxNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgUGxheSwgU2xpZGVycyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBDT0xPUl9LRVlTIH0gZnJvbSAnLi4vZ2FtZS9jb2xvcnMudHMnO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTGV2ZWxNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvblN0YXJ0Q3VzdG9tR2FtZTogKGNvbG9yQ291bnQ6IG51bWJlciwgZW1wdHlDb3VudDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tTGV2ZWxNb2RhbDogUmVhY3QuRkM8Q3VzdG9tTGV2ZWxNb2RhbFByb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgb25TdGFydEN1c3RvbUdhbWUsXG59KSA9PiB7XG4gIGNvbnN0IFtjb2xvcnMsIHNldENvbG9yc10gPSB1c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbZW1wdHlUdWJlcywgc2V0RW1wdHlUdWJlc10gPSB1c2VTdGF0ZTxudW1iZXI+KDIpO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBtYXhDb2xvcnMgPSBNYXRoLm1pbigxMiwgQ09MT1JfS0VZUy5sZW5ndGgpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25TdGFydEN1c3RvbUdhbWUoY29sb3JzLCBlbXB0eVR1YmVzKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImN1c3RvbS1nYW1lLXRpdGxlXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctc2xhdGUtOTUwLzYwIGJhY2tkcm9wLWJsdXIteHMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgdy1mdWxsIG1heC13LW1kIHAtNiBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPFNsaWRlcnMgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXNreS02MDAgZGFyazp0ZXh0LXNreS00MDBcIiAvPlxuICAgICAgICAgICAgPGgyIGlkPVwiY3VzdG9tLWdhbWUtdGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgIFBhcnRpZGEgUGVyc29uYWxpemFkYVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTcwMCBkYXJrOmhvdmVyOnRleHQtc2xhdGUtMjAwIGhvdmVyOmJnLXNsYXRlLTEwMCBkYXJrOmhvdmVyOmJnLXNsYXRlLTgwMCB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2VycmFyIG1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvcm0gQ29udHJvbHMgKi99XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTUgc3BhY2UteS01XCI+XG4gICAgICAgICAgey8qIENvbG9ycyBTbGlkZXIgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gZm9udC1tZWRpdW0gbWItMS41XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0zMDBcIj5DYW50aWRhZCBkZSBjb2xvcmVzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1za3ktNjAwIGRhcms6dGV4dC1za3ktNDAwIGZvbnQtYm9sZCB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICB7Y29sb3JzfSBjb2xvcmVzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgIG1pbj17Mn1cbiAgICAgICAgICAgICAgbWF4PXttYXhDb2xvcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb2xvcnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29sb3JzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LXNreS02MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICA8c3Bhbj4yIChGw6FjaWwpPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj42IChNZWRpbyk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjEyIChFeHBlcnRvKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEVtcHR5IFR1YmVzIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBmb250LW1lZGl1bSBtYi0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0zMDBcIj5UdWJvcyB2YWPDrW9zIGxpYnJlczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc2t5LTYwMCBkYXJrOnRleHQtc2t5LTQwMCBmb250LWJvbGQgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAge2VtcHR5VHViZXN9IHR1Ym9zXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0yXCI+XG4gICAgICAgICAgICAgIHtbMSwgMiwgM10ubWFwKChudW0pID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e251bX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RW1wdHlUdWJlcyhudW0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBib3JkZXIgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUdWJlcyA9PT0gbnVtXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmctc2t5LTUwIGRhcms6Ymctc2t5LTk1MC80MCB0ZXh0LXNreS03MDAgZGFyazp0ZXh0LXNreS0zMDAgYm9yZGVyLXNreS0zMDAgZGFyazpib3JkZXItc2t5LTgwMCBzaGFkb3cteHMnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDAgdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS01MCBkYXJrOmhvdmVyOmJnLXNsYXRlLTgwMCdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtudW19IHtudW0gPT09IDEgPyAnVHVibycgOiAnVHVib3MnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFN1bW1hcnkgRGV0YWlscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1zbGF0ZS01MCBkYXJrOmJnLXNsYXRlLTg1MCByb3VuZGVkLXhsIHRleHQteHMgdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+VG90YWwgZGUgdHVib3MgZW4ganVlZ286PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS04MDAgZGFyazp0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICAgIHtjb2xvcnMgKyBlbXB0eVR1YmVzfSB0dWJvc1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+QWxnb3JpdG1vIGRlIGdhcmFudMOtYTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC02MDAgZGFyazp0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgMTAwJSBTb2x1YmxlIHZlcmlmaWNhZG9cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3VibWl0IEJ1dHRvbiAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgcHgtNCBiZy1za3ktNjAwIGhvdmVyOmJnLXNreS01MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9XCJ3LTQgaC00IGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5HZW5lcmFyIHkgSnVnYXI8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==