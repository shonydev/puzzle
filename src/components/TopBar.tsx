const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { Volume2, VolumeX, Eye, Sparkles, Smartphone } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
var _jsxFileName = "/app/applet/src/components/TopBar.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const TopBar = ({ onOpenLevels, onOpenDaily, onOpenCustom, onOpenHelp, onOpenDownload, soundEnabled, onToggleSound, symbolMode, onToggleSymbols }) => {
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-30",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8",
			children: [
				/* @__PURE__ */ _jsxDEV("a", {
					href: "#",
					onClick: (e) => {
						e.preventDefault();
						onOpenLevels();
					},
					className: "text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-display",
					children: "AquaSort"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("nav", {
					className: "hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenLevels,
							className: "hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer",
							children: "Niveles (100)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenDaily,
							className: "hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer",
							children: "Desafío Diario"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenCustom,
							className: "hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer",
							children: "Partida Libre"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenHelp,
							className: "hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer",
							children: "Cómo Jugar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenDownload,
							className: "hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer",
							children: "iPhone / Descargar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2 sm:gap-3 shrink-0",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenDownload,
							title: "Descargar o Instalar en iPhone 13",
							"aria-label": "Descargar o instalar en iPhone",
							className: "p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 flex items-center gap-1 text-xs font-medium",
							children: [/* @__PURE__ */ _jsxDEV(Smartphone, { className: "w-4 h-4 text-sky-600 dark:text-sky-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "hidden sm:inline",
								children: "Instalar / ZIP"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onToggleSymbols,
							title: symbolMode ? "Modo Símbolos Activado (Accesibilidad de Color)" : "Activar Modo Símbolos",
							"aria-label": "Alternar símbolos de color",
							className: `p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${symbolMode ? "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-300 dark:border-sky-800" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700"}`,
							children: /* @__PURE__ */ _jsxDEV(Eye, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onToggleSound,
							title: soundEnabled ? "Silenciar Sonido" : "Activar Sonido",
							"aria-label": "Alternar sonido",
							className: "p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-slate-700",
							children: soundEnabled ? /* @__PURE__ */ _jsxDEV(Volume2, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV(VolumeX, { className: "w-4 h-4 text-slate-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onOpenLevels,
							className: "px-3.5 py-2 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Elegir Nivel" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsU0FBUyxTQUFTLEtBQUssVUFBVSxrQkFBa0I7OztBQWU1RCxPQUFPLE1BQU0sVUFBaUMsRUFDNUMsY0FDQSxhQUNBLGNBQ0EsWUFDQSxnQkFDQSxjQUNBLGVBQ0EsWUFDQSxzQkFDSTtDQUNKLE9BQ0Usd0JBQUMsVUFBRDtFQUFRLFdBQVU7WUFDaEIsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZjtJQUVFLHdCQUFDLEtBQUQ7S0FDRSxNQUFLO0tBQ0wsVUFBVSxNQUFNO01BQ2QsRUFBRSxlQUFlO01BQ2pCLGFBQWE7S0FDZjtLQUNBLFdBQVU7ZUFDWDtJQUVFOzs7OztJQUdILHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFDRSx3QkFBQyxVQUFEO09BQ0UsTUFBSztPQUNMLFNBQVM7T0FDVCxXQUFVO2lCQUNYO01BRU87Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsV0FBVTtpQkFDWDtNQUVPOzs7OztNQUNSLHdCQUFDLFVBQUQ7T0FDRSxNQUFLO09BQ0wsU0FBUztPQUNULFdBQVU7aUJBQ1g7TUFFTzs7Ozs7TUFDUix3QkFBQyxVQUFEO09BQ0UsTUFBSztPQUNMLFNBQVM7T0FDVCxXQUFVO2lCQUNYO01BRU87Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsV0FBVTtpQkFDWDtNQUVPOzs7OztLQUNMOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BRUUsd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsT0FBTTtPQUNOLGNBQVc7T0FDWCxXQUFVO2lCQUxaLENBT0Usd0JBQUMsWUFBRCxFQUFZLFdBQVUseUNBQTBDOzs7O2lCQUNoRSx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBbUI7T0FBb0I7Ozs7ZUFDakQ7Ozs7OztNQUdSLHdCQUFDLFVBQUQ7T0FDRSxNQUFLO09BQ0wsU0FBUztPQUNULE9BQ0UsYUFDSSxvREFDQTtPQUVOLGNBQVc7T0FDWCxXQUFXLDhFQUNULGFBQ0ksbUdBQ0E7aUJBR04sd0JBQUMsS0FBRCxFQUFLLFdBQVUsVUFBVzs7Ozs7TUFDcEI7Ozs7O01BR1Isd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsT0FBTyxlQUFlLHFCQUFxQjtPQUMzQyxjQUFXO09BQ1gsV0FBVTtpQkFFVCxlQUNDLHdCQUFDLFNBQUQsRUFBUyxXQUFVLFVBQVc7Ozs7a0JBRTlCLHdCQUFDLFNBQUQsRUFBUyxXQUFVLHlCQUEwQjs7Ozs7TUFFekM7Ozs7O01BR1Isd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxTQUFTO09BQ1QsV0FBVTtpQkFIWixDQUtFLHdCQUFDLFVBQUQsRUFBVSxXQUFVLGNBQWU7Ozs7aUJBQ25DLHdCQUFDLFFBQUQsWUFBTSxlQUFrQjs7OztlQUNsQjs7Ozs7O0tBQ0w7Ozs7OztHQUNGOzs7Ozs7Q0FDQzs7Ozs7QUFFWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJUb3BCYXIudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWb2x1bWUyLCBWb2x1bWVYLCBFeWUsIFNwYXJrbGVzLCBTbWFydHBob25lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIFRvcEJhclByb3BzIHtcbiAgb25PcGVuTGV2ZWxzOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5EYWlseTogKCkgPT4gdm9pZDtcbiAgb25PcGVuQ3VzdG9tOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5IZWxwOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5Eb3dubG9hZDogKCkgPT4gdm9pZDtcbiAgc291bmRFbmFibGVkOiBib29sZWFuO1xuICBvblRvZ2dsZVNvdW5kOiAoKSA9PiB2b2lkO1xuICBzeW1ib2xNb2RlOiBib29sZWFuO1xuICBvblRvZ2dsZVN5bWJvbHM6ICgpID0+IHZvaWQ7XG4gIGN1cnJlbnRMZXZlbE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRvcEJhcjogUmVhY3QuRkM8VG9wQmFyUHJvcHM+ID0gKHtcbiAgb25PcGVuTGV2ZWxzLFxuICBvbk9wZW5EYWlseSxcbiAgb25PcGVuQ3VzdG9tLFxuICBvbk9wZW5IZWxwLFxuICBvbk9wZW5Eb3dubG9hZCxcbiAgc291bmRFbmFibGVkLFxuICBvblRvZ2dsZVNvdW5kLFxuICBzeW1ib2xNb2RlLFxuICBvblRvZ2dsZVN5bWJvbHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgYmctd2hpdGUvOTAgZGFyazpiZy1zbGF0ZS05MDAvOTAgYmFja2Ryb3AtYmx1ci1zbSBzdGlja3kgdG9wLTAgei0zMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHNtOnB4LTYgaC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLThcIj5cbiAgICAgICAgey8qIFpvbmUgMTogU2luZ2xlIHRleHQgZWxlbWVudCB3b3JkbWFyayAqL31cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9uT3BlbkxldmVscygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIGhvdmVyOnRleHQtc2t5LTYwMCBkYXJrOmhvdmVyOnRleHQtc2t5LTQwMCB0cmFuc2l0aW9uLWNvbG9ycyBmb250LWRpc3BsYXlcIlxuICAgICAgICA+XG4gICAgICAgICAgQXF1YVNvcnRcbiAgICAgICAgPC9hPlxuXG4gICAgICAgIHsvKiBab25lIDI6IDQtNSBjbGVhbiBzaW5nbGUtbGluZSB0ZXh0IG5hdmlnYXRpb24gbGlua3MgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25PcGVuTGV2ZWxzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1zbGF0ZS05MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBOaXZlbGVzICgxMDApXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5EYWlseX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2xhdGUtOTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVzYWbDrW8gRGlhcmlvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5DdXN0b219XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNsYXRlLTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhcnRpZGEgTGlicmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkhlbHB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNsYXRlLTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEPDs21vIEp1Z2FyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5Eb3dubG9hZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMCBkYXJrOmhvdmVyOnRleHQtc2t5LTQwMCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgaVBob25lIC8gRGVzY2FyZ2FyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIHsvKiBab25lIDM6IFF1aWNrIGFjY2Vzc2liaWxpdHkgdG9nZ2xlcyAmIDEgcHJpbWFyeSBhY3Rpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTMgc2hyaW5rLTBcIj5cbiAgICAgICAgICB7LyogRG93bmxvYWQgLyBpUGhvbmUgSW5zdGFsbCBidXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5Eb3dubG9hZH1cbiAgICAgICAgICAgIHRpdGxlPVwiRGVzY2FyZ2FyIG8gSW5zdGFsYXIgZW4gaVBob25lIDEzXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZXNjYXJnYXIgbyBpbnN0YWxhciBlbiBpUGhvbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtMTAwIGRhcms6aG92ZXI6Ymctc2xhdGUtODAwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGRhcms6Ym9yZGVyLXNsYXRlLTcwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U21hcnRwaG9uZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc2t5LTYwMCBkYXJrOnRleHQtc2t5LTQwMFwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+SW5zdGFsYXIgLyBaSVA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogU3ltYm9sIC8gQWNjZXNzaWJpbGl0eSBtb2RlIHRvZ2dsZSAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlU3ltYm9sc31cbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgc3ltYm9sTW9kZVxuICAgICAgICAgICAgICAgID8gJ01vZG8gU8OtbWJvbG9zIEFjdGl2YWRvIChBY2Nlc2liaWxpZGFkIGRlIENvbG9yKSdcbiAgICAgICAgICAgICAgICA6ICdBY3RpdmFyIE1vZG8gU8OtbWJvbG9zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFsdGVybmFyIHPDrW1ib2xvcyBkZSBjb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGJvcmRlciAke1xuICAgICAgICAgICAgICBzeW1ib2xNb2RlXG4gICAgICAgICAgICAgICAgPyAnYmctc2t5LTUwIGRhcms6Ymctc2t5LTk1MC80MCB0ZXh0LXNreS02MDAgZGFyazp0ZXh0LXNreS00MDAgYm9yZGVyLXNreS0zMDAgZGFyazpib3JkZXItc2t5LTgwMCdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtOTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBib3JkZXItc2xhdGUtMjAwIGRhcms6Ym9yZGVyLXNsYXRlLTcwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeWUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogU291bmQgdG9nZ2xlICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVTb3VuZH1cbiAgICAgICAgICAgIHRpdGxlPXtzb3VuZEVuYWJsZWQgPyAnU2lsZW5jaWFyIFNvbmlkbycgOiAnQWN0aXZhciBTb25pZG8nfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFsdGVybmFyIHNvbmlkb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtOTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzb3VuZEVuYWJsZWQgPyAoXG4gICAgICAgICAgICAgIDxWb2x1bWUyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZvbHVtZVggY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXNsYXRlLTQwMFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFByaW1hcnkgQWN0aW9uIEJ1dHRvbiAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkxldmVsc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLXNreS02MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1za3ktNTAwIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIHNoYWRvdy14cyBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+RWxlZ2lyIE5pdmVsPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiJdfQ==