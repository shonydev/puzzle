const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { getColorDef } from "/src/game/colors.ts";
import { TUBE_CAPACITY } from "/src/game/engine.ts";
var _jsxFileName = "/app/applet/src/components/Tube.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const Tube = ({ index, colors, capacity = TUBE_CAPACITY, isSelected, isHintSource = false, isHintTarget = false, isPouringSource = false, tiltAngle = 0, tiltDirection = "right", symbolMode = false, onClick, disabled = false }) => {
	const isComplete = colors.length === capacity && colors.every((c) => c === colors[0]);
	// Transform styles for lift & tilt
	let transform = "";
	if (isPouringSource) {
		const deg = tiltDirection === "right" ? tiltAngle : -tiltAngle;
		const xShift = tiltDirection === "right" ? 30 : -30;
		transform = `translate(${xShift}px, -45px) rotate(${deg}deg)`;
	} else if (isSelected) {
		transform = "translateY(-22px)";
	} else {
		transform = "translateY(0px)";
	}
	// Calculate height percentages for each layer
	// Max capacity 4 units => each unit is 25%
	const unitHeightPercent = 100 / capacity;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "relative flex flex-col items-center",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "h-6 flex items-center justify-center mb-1",
				children: [
					isSelected && /* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs font-semibold px-2 py-0.5 rounded bg-sky-500 text-white shadow-sm animate-bounce",
						children: "Elegido"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					isHintSource && !isSelected && /* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs font-semibold px-2 py-0.5 rounded bg-amber-500 text-white shadow-sm animate-pulse",
						children: "Desde"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this),
					isHintTarget && /* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500 text-white shadow-sm animate-pulse",
						children: "Hacia"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this),
					isComplete && !isSelected && /* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5",
						children: "✓ Completo"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("button", {
				type: "button",
				onClick,
				disabled,
				"aria-label": `Tubo ${index + 1}: ${colors.length} de ${capacity} capas`,
				style: {
					transform,
					transition: isPouringSource ? "transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease",
					transformOrigin: tiltDirection === "right" ? "top right" : "top left"
				},
				className: `group relative outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-b-3xl ${disabled ? "opacity-80 cursor-default" : ""}`,
				children: [
					/* @__PURE__ */ _jsxDEV("div", { className: `absolute -inset-1 rounded-b-3xl transition-opacity duration-200 pointer-events-none ${isSelected ? "opacity-100 bg-sky-400/20 blur-sm" : isHintSource ? "opacity-100 bg-amber-400/20 blur-sm" : isHintTarget ? "opacity-100 bg-emerald-400/20 blur-sm" : isComplete ? "opacity-40 bg-emerald-400/10 blur-xs" : "opacity-0"}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-[68px] sm:w-[74px] h-[8px] mx-auto rounded-t-sm bg-gradient-to-b from-white/90 via-slate-200/80 to-slate-300/90 dark:from-slate-600/90 dark:via-slate-700/80 dark:to-slate-800/90 border border-slate-300 dark:border-slate-600 shadow-xs relative z-20 flex items-center justify-between px-1",
						children: [/* @__PURE__ */ _jsxDEV("div", { className: "w-1.5 h-1 bg-white/70 rounded-full" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("div", { className: "w-1.5 h-1 bg-white/70 rounded-full" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-[58px] sm:w-[64px] h-[190px] sm:h-[210px] mx-auto relative rounded-b-[28px] overflow-hidden bg-slate-900/5 dark:bg-slate-800/20 border-x-2 border-b-2 border-slate-300/80 dark:border-slate-600/70 shadow-inner backdrop-blur-[1px]",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/15 to-transparent pointer-events-none z-10" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "absolute inset-x-0 bottom-0 top-0 flex flex-col-reverse justify-start",
								children: colors.map((colorId, layerIdx) => {
									const color = getColorDef(colorId);
									const isTop = layerIdx === colors.length - 1;
									return /* @__PURE__ */ _jsxDEV("div", {
										style: {
											height: `${unitHeightPercent}%`,
											backgroundColor: color.hex,
											background: `linear-gradient(135deg, ${color.surface} 0%, ${color.hex} 50%, ${color.darkHex} 100%)`
										},
										className: "relative w-full transition-all duration-200 flex items-center justify-center overflow-hidden",
										children: [
											isTop && /* @__PURE__ */ _jsxDEV("div", {
												style: { backgroundColor: color.surface },
												className: "absolute inset-x-0 top-0 h-[4px] opacity-80 shadow-xs"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 142,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", { className: "absolute left-1.5 top-1.5 w-1 h-2 rounded-full bg-white/30" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 151,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", { className: "absolute right-2 bottom-1.5 w-1.5 h-1.5 rounded-full bg-white/20" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 152,
												columnNumber: 19
											}, this),
											(symbolMode || true) && /* @__PURE__ */ _jsxDEV("span", {
												style: {
													color: color.textColor,
													textShadow: "0 1px 2px rgba(0,0,0,0.5)"
												},
												className: `font-bold transition-opacity select-none ${symbolMode ? "text-sm opacity-95 scale-110" : "text-xs opacity-65"}`,
												title: `${color.name} (${color.symbolName})`,
												children: color.symbol
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 156,
												columnNumber: 21
											}, this)
										]
									}, `${index}-${layerIdx}-${colorId}`, true, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 17
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { className: "absolute left-1.5 inset-y-2 w-1 rounded-full bg-gradient-to-b from-white/60 via-white/25 to-white/5 pointer-events-none z-10" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { className: "absolute right-1 inset-y-4 w-0.5 rounded-full bg-white/20 pointer-events-none z-10" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 11
							}, this),
							isComplete && /* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 border-2 border-emerald-400/60 rounded-b-[26px] pointer-events-none z-20 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "w-10 h-1.5 mx-auto bg-black/15 dark:bg-black/40 rounded-full blur-[2px] mt-1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("span", {
				className: "text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 tabular-nums",
				children: index + 1
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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V0FDSDs7Ozs7VUFFTDtZQXZDRSxHQUFHLE1BQU0sR0FBRyxTQUFTLEdBQUc7Ozs7Z0JBdUMxQjtRQUVULENBQUM7T0FDRTs7Ozs7T0FHTCx3QkFBQyxPQUFELEVBQUssV0FBVSwrSEFBZ0k7Ozs7O09BRy9JLHdCQUFDLE9BQUQsRUFBSyxXQUFVLHFGQUFzRjs7Ozs7T0FHcEcsY0FDQyx3QkFBQyxPQUFELEVBQUssV0FBVSwwR0FBMkc7Ozs7O01BRXpIOzs7Ozs7S0FHTCx3QkFBQyxPQUFELEVBQUssV0FBVSwrRUFBZ0Y7Ozs7O0lBQ3pGOzs7Ozs7R0FHUix3QkFBQyxRQUFEO0lBQU0sV0FBVTtjQUNiLFFBQVE7R0FDTDs7Ozs7RUFDSDs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiVHViZS50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldENvbG9yRGVmIH0gZnJvbSAnLi4vZ2FtZS9jb2xvcnMudHMnO1xuaW1wb3J0IHsgVFVCRV9DQVBBQ0lUWSB9IGZyb20gJy4uL2dhbWUvZW5naW5lLnRzJztcblxuaW50ZXJmYWNlIFR1YmVQcm9wcyB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGNvbG9yczogc3RyaW5nW107XG4gIGNhcGFjaXR5PzogbnVtYmVyO1xuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBpc0hpbnRTb3VyY2U/OiBib29sZWFuO1xuICBpc0hpbnRUYXJnZXQ/OiBib29sZWFuO1xuICBpc1BvdXJpbmdTb3VyY2U/OiBib29sZWFuO1xuICB0aWx0QW5nbGU/OiBudW1iZXI7XG4gIHRpbHREaXJlY3Rpb24/OiAnbGVmdCcgfCAncmlnaHQnO1xuICBzeW1ib2xNb2RlPzogYm9vbGVhbjtcbiAgZmxhc2tTdHlsZT86ICd0ZXN0LXR1YmUnIHwgJ2VybGVubWV5ZXInIHwgJ2N5bGluZGVyJztcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVHViZTogUmVhY3QuRkM8VHViZVByb3BzPiA9ICh7XG4gIGluZGV4LFxuICBjb2xvcnMsXG4gIGNhcGFjaXR5ID0gVFVCRV9DQVBBQ0lUWSxcbiAgaXNTZWxlY3RlZCxcbiAgaXNIaW50U291cmNlID0gZmFsc2UsXG4gIGlzSGludFRhcmdldCA9IGZhbHNlLFxuICBpc1BvdXJpbmdTb3VyY2UgPSBmYWxzZSxcbiAgdGlsdEFuZ2xlID0gMCxcbiAgdGlsdERpcmVjdGlvbiA9ICdyaWdodCcsXG4gIHN5bWJvbE1vZGUgPSBmYWxzZSxcbiAgb25DbGljayxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgaXNDb21wbGV0ZSA9XG4gICAgY29sb3JzLmxlbmd0aCA9PT0gY2FwYWNpdHkgJiYgY29sb3JzLmV2ZXJ5KChjKSA9PiBjID09PSBjb2xvcnNbMF0pO1xuXG4gIC8vIFRyYW5zZm9ybSBzdHlsZXMgZm9yIGxpZnQgJiB0aWx0XG4gIGxldCB0cmFuc2Zvcm0gPSAnJztcbiAgaWYgKGlzUG91cmluZ1NvdXJjZSkge1xuICAgIGNvbnN0IGRlZyA9IHRpbHREaXJlY3Rpb24gPT09ICdyaWdodCcgPyB0aWx0QW5nbGUgOiAtdGlsdEFuZ2xlO1xuICAgIGNvbnN0IHhTaGlmdCA9IHRpbHREaXJlY3Rpb24gPT09ICdyaWdodCcgPyAzMCA6IC0zMDtcbiAgICB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eFNoaWZ0fXB4LCAtNDVweCkgcm90YXRlKCR7ZGVnfWRlZylgO1xuICB9IGVsc2UgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMjJweCknO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIGhlaWdodCBwZXJjZW50YWdlcyBmb3IgZWFjaCBsYXllclxuICAvLyBNYXggY2FwYWNpdHkgNCB1bml0cyA9PiBlYWNoIHVuaXQgaXMgMjUlXG4gIGNvbnN0IHVuaXRIZWlnaHRQZXJjZW50ID0gMTAwIC8gY2FwYWNpdHk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7LyogU2VsZWN0aW9uIC8gSGludCBJbmRpY2F0b3IgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHgtMiBweS0wLjUgcm91bmRlZCBiZy1za3ktNTAwIHRleHQtd2hpdGUgc2hhZG93LXNtIGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICAgICAgICBFbGVnaWRvXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7aXNIaW50U291cmNlICYmICFpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHgtMiBweS0wLjUgcm91bmRlZCBiZy1hbWJlci01MDAgdGV4dC13aGl0ZSBzaGFkb3ctc20gYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgRGVzZGVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0hpbnRUYXJnZXQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkIGJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgc2hhZG93LXNtIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgIEhhY2lhXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb21wbGV0ZSAmJiAhaXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWVtZXJhbGQtNjAwIGRhcms6dGV4dC1lbWVyYWxkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMC41XCI+XG4gICAgICAgICAgICDinJMgQ29tcGxldG9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEludGVyYWN0aXZlIFR1YmUgQ29udGFpbmVyICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBhcmlhLWxhYmVsPXtgVHVibyAke2luZGV4ICsgMX06ICR7Y29sb3JzLmxlbmd0aH0gZGUgJHtjYXBhY2l0eX0gY2FwYXNgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBpc1BvdXJpbmdTb3VyY2VcbiAgICAgICAgICAgID8gJ3RyYW5zZm9ybSAzMjBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSknXG4gICAgICAgICAgICA6ICd0cmFuc2Zvcm0gMTgwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSksIGJveC1zaGFkb3cgMTgwbXMgZWFzZScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxuICAgICAgICAgICAgdGlsdERpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICd0b3AgcmlnaHQnIDogJ3RvcCBsZWZ0JyxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgb3V0bGluZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1za3ktNTAwIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiByb3VuZGVkLWItM3hsICR7XG4gICAgICAgICAgZGlzYWJsZWQgPyAnb3BhY2l0eS04MCBjdXJzb3ItZGVmYXVsdCcgOiAnJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgey8qIEdsb3cgaGFsbyB3aGVuIHNlbGVjdGVkIG9yIGNvbXBsZXRlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgLWluc2V0LTEgcm91bmRlZC1iLTN4bCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIHBvaW50ZXItZXZlbnRzLW5vbmUgJHtcbiAgICAgICAgICAgIGlzU2VsZWN0ZWRcbiAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgYmctc2t5LTQwMC8yMCBibHVyLXNtJ1xuICAgICAgICAgICAgICA6IGlzSGludFNvdXJjZVxuICAgICAgICAgICAgICA/ICdvcGFjaXR5LTEwMCBiZy1hbWJlci00MDAvMjAgYmx1ci1zbSdcbiAgICAgICAgICAgICAgOiBpc0hpbnRUYXJnZXRcbiAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgYmctZW1lcmFsZC00MDAvMjAgYmx1ci1zbSdcbiAgICAgICAgICAgICAgOiBpc0NvbXBsZXRlXG4gICAgICAgICAgICAgID8gJ29wYWNpdHktNDAgYmctZW1lcmFsZC00MDAvMTAgYmx1ci14cydcbiAgICAgICAgICAgICAgOiAnb3BhY2l0eS0wJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBUdWJlIExpcCAoUmltKSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2OHB4XSBzbTp3LVs3NHB4XSBoLVs4cHhdIG14LWF1dG8gcm91bmRlZC10LXNtIGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZS85MCB2aWEtc2xhdGUtMjAwLzgwIHRvLXNsYXRlLTMwMC85MCBkYXJrOmZyb20tc2xhdGUtNjAwLzkwIGRhcms6dmlhLXNsYXRlLTcwMC84MCBkYXJrOnRvLXNsYXRlLTgwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCBkYXJrOmJvcmRlci1zbGF0ZS02MDAgc2hhZG93LXhzIHJlbGF0aXZlIHotMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS41IGgtMSBiZy13aGl0ZS83MCByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLjUgaC0xIGJnLXdoaXRlLzcwIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNYWluIEdsYXNzIFR1YmUgQm9keSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1OHB4XSBzbTp3LVs2NHB4XSBoLVsxOTBweF0gc206aC1bMjEwcHhdIG14LWF1dG8gcmVsYXRpdmUgcm91bmRlZC1iLVsyOHB4XSBvdmVyZmxvdy1oaWRkZW4gYmctc2xhdGUtOTAwLzUgZGFyazpiZy1zbGF0ZS04MDAvMjAgYm9yZGVyLXgtMiBib3JkZXItYi0yIGJvcmRlci1zbGF0ZS0zMDAvODAgZGFyazpib3JkZXItc2xhdGUtNjAwLzcwIHNoYWRvdy1pbm5lciBiYWNrZHJvcC1ibHVyLVsxcHhdXCI+XG4gICAgICAgICAgey8qIEdsYXNzIElubmVyIFJpbSBTaGFkb3cgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTAgaC00IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjay8xNSB0by10cmFuc3BhcmVudCBwb2ludGVyLWV2ZW50cy1ub25lIHotMTBcIiAvPlxuXG4gICAgICAgICAgey8qIExpcXVpZCBMYXllcnMgKEJvdHRvbSB0byBUb3ApICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIHRvcC0wIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICB7Y29sb3JzLm1hcCgoY29sb3JJZCwgbGF5ZXJJZHgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBnZXRDb2xvckRlZihjb2xvcklkKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNUb3AgPSBsYXllcklkeCA9PT0gY29sb3JzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fS0ke2xheWVySWR4fS0ke2NvbG9ySWR9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dW5pdEhlaWdodFBlcmNlbnR9JWAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IuaGV4LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtjb2xvci5zdXJmYWNlfSAwJSwgJHtjb2xvci5oZXh9IDUwJSwgJHtjb2xvci5kYXJrSGV4fSAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsvKiBTdWJ0bGUgTWVuaXNjdXMgY3VydmUgb24gdGhlIHN1cmZhY2Ugb2YgbGlxdWlkICovfVxuICAgICAgICAgICAgICAgICAge2lzVG9wICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTAgaC1bNHB4XSBvcGFjaXR5LTgwIHNoYWRvdy14c1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7LyogTGlxdWlkIEJ1YmJsZXMgLyBIaWdobGlnaHRzICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEuNSB0b3AtMS41IHctMSBoLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzMwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiBib3R0b20tMS41IHctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8yMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBBY2Nlc3NpYmlsaXR5IEljb24gLyBEaXN0aW5jdCBTeW1ib2wgKi99XG4gICAgICAgICAgICAgICAgICB7KHN5bWJvbE1vZGUgfHwgdHJ1ZSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ib2xkIHRyYW5zaXRpb24tb3BhY2l0eSBzZWxlY3Qtbm9uZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG9wYWNpdHktOTUgc2NhbGUtMTEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LXhzIG9wYWNpdHktNjUnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake2NvbG9yLm5hbWV9ICgke2NvbG9yLnN5bWJvbE5hbWV9KWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sb3Iuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTGVmdCBWZXJ0aWNhbCBHbGFzcyBSZWZsZWN0aW9uIExpbmUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEuNSBpbnNldC15LTIgdy0xIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUvNjAgdmlhLXdoaXRlLzI1IHRvLXdoaXRlLzUgcG9pbnRlci1ldmVudHMtbm9uZSB6LTEwXCIgLz5cblxuICAgICAgICAgIHsvKiBSaWdodCBTcGVjdWxhciBSaW0gSGlnaGxpZ2h0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMSBpbnNldC15LTQgdy0wLjUgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzIwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMFwiIC8+XG5cbiAgICAgICAgICB7LyogQ29tcGxldGUgUmluZyBFZmZlY3QgKi99XG4gICAgICAgICAge2lzQ29tcGxldGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJvcmRlci0yIGJvcmRlci1lbWVyYWxkLTQwMC82MCByb3VuZGVkLWItWzI2cHhdIHBvaW50ZXItZXZlbnRzLW5vbmUgei0yMCBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVHViZSBCYXNlIC8gUGVkZXN0YWwgc2hhZG93ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xLjUgbXgtYXV0byBiZy1ibGFjay8xNSBkYXJrOmJnLWJsYWNrLzQwIHJvdW5kZWQtZnVsbCBibHVyLVsycHhdIG10LTFcIiAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBUdWJlIE51bWJlciBMYWJlbCAqL31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGRhcms6dGV4dC1zbGF0ZS00MDAgbXQtMSB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAge2luZGV4ICsgMX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=