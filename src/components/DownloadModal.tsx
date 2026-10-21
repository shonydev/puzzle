const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const JSZip = __vite__cjsImport2_jszip;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport3_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=6d8760dc";
import { X, Smartphone, Download, Share2, Copy, Check, FileCode, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=3f8fba4a";
import __vite__cjsImport2_jszip from "/node_modules/.vite/deps/jszip.js?v=ab9f0960";
var _jsxFileName = "/app/applet/src/components/DownloadModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6d8760dc";
export const DownloadModal = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false);
	const [isZipping, setIsZipping] = useState(false);
	if (!isOpen) return null;
	const currentUrl = typeof window !== "undefined" ? window.location.href : "";
	const handleCopyLink = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(currentUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		}
	};
	const handleDownloadZip = async () => {
		try {
			setIsZipping(true);
			const zip = new JSZip();
			// List of project source files to package
			const filePaths = [
				"package.json",
				"tsconfig.json",
				"vite.config.ts",
				"index.html",
				"metadata.json",
				"src/main.tsx",
				"src/App.tsx",
				"src/index.css",
				"src/game/colors.ts",
				"src/game/engine.ts",
				"src/game/levels.ts",
				"src/game/audio.ts",
				"src/game/storage.ts",
				"src/components/TopBar.tsx",
				"src/components/Tube.tsx",
				"src/components/GameHUD.tsx",
				"src/components/LevelSelectModal.tsx",
				"src/components/WinModal.tsx",
				"src/components/CustomLevelModal.tsx",
				"src/components/HelpModal.tsx",
				"src/components/DownloadModal.tsx",
				"public/manifest.json",
				"public/icon.svg"
			];
			// Fetch each file content from dev server
			for (const path of filePaths) {
				try {
					const res = await fetch(`/${path}`);
					if (res.ok) {
						const text = await res.text();
						zip.file(path, text);
					}
				} catch (e) {
					console.warn(`Could not bundle ${path}`, e);
				}
			}
			// Add a helpful README.md
			zip.file("README.md", `# AquaSort - Water Color Puzzle\n\nJuego de rompecabezas de clasificación de agua con 100 niveles y colores distingibles.\n\n## Instalación y ejecución local:\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\nAbre http://localhost:3000 en tu navegador.`);
			// Generate blob
			const blob = await zip.generateAsync({ type: "blob" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "aquasort-water-puzzle.zip";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("Error generating zip:", err);
		} finally {
			setIsZipping(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "download-modal-title",
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto shadow-2xl",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(Smartphone, { className: "w-5 h-5 text-sky-600 dark:text-sky-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							id: "download-modal-title",
							className: "text-xl font-bold text-slate-900 dark:text-white font-display",
							children: "Descargar en iPhone 13"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
						"aria-label": "Cerrar modal",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-4 p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-850",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-sm mb-2",
							children: [/* @__PURE__ */ _jsxDEV(Share2, { className: "w-4 h-4 text-sky-600 dark:text-sky-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Opción 1: Instalar como App en la pantalla de inicio (Recomendado)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed",
							children: "Permite jugar en pantalla completa, sin barras de navegación y con carga instantánea:"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("ol", {
							className: "text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside bg-white dark:bg-slate-900 p-3 rounded-lg border border-sky-100 dark:border-slate-800",
							children: [
								/* @__PURE__ */ _jsxDEV("li", { children: [
									"Abre este enlace directamente en ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Safari" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 48
									}, this),
									" en tu iPhone 13."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("li", { children: [
									"Toca el botón ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Compartir" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 29
									}, this),
									" (icono de cuadrado con una flecha hacia arriba ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-sky-600",
										children: "⎋"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 103
									}, this),
									" en la barra inferior de Safari)."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("li", { children: [
									"Baja un poco y selecciona ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "\"Agregar a pantalla de inicio\"" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 41
									}, this),
									"."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("li", { children: [
									"Toca ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "\"Agregar\"" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 20
									}, this),
									" en la esquina superior derecha."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-3 flex items-center gap-2",
							children: /* @__PURE__ */ _jsxDEV("button", {
								type: "button",
								onClick: handleCopyLink,
								className: "flex-1 py-2 px-3 bg-white dark:bg-slate-800 border border-sky-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-750 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
								children: copied ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-emerald-600 font-semibold",
									children: "¡Enlace copiado!"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 154,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 17
								}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Copiar enlace para abrir en Safari" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1.5",
							children: [/* @__PURE__ */ _jsxDEV(FileCode, { className: "w-4 h-4 text-emerald-600 dark:text-emerald-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Opción 2: Descargar el Código Fuente (.zip)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed",
							children: [
								"Descarga un archivo ZIP con todos los archivos del proyecto (código React, TypeScript, niveles, estilos) directamente a la app ",
								/* @__PURE__ */ _jsxDEV("strong", { children: "Archivos (Files)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 140
								}, this),
								" o iCloud Drive de tu iPhone."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: handleDownloadZip,
							disabled: isZipping,
							className: "w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer text-xs",
							children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: isZipping ? "Comprimiendo proyecto..." : "Descargar aquasort-water-puzzle.zip" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 167,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-4 p-3 bg-slate-100/60 dark:bg-slate-800/40 rounded-xl text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2",
					children: [/* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
						"También puedes exportar el proyecto a un repositorio de ",
						/* @__PURE__ */ _jsxDEV("strong", { children: "GitHub" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 69
						}, this),
						" usando el menú de opciones en la esquina superior de Google AI Studio."
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-5",
					children: /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						onClick: onClose,
						className: "w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-xs",
						children: "Cerrar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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VSxVQUFXOzs7O2lCQUMvQix3QkFBQyxRQUFELFlBQU8sWUFBWSw2QkFBNkIsc0NBQTRDOzs7O2VBQ3RGOzs7Ozs7S0FDTDs7Ozs7O0lBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLGNBQUQsRUFBYyxXQUFVLDZDQUE4Qzs7OztlQUN0RSx3QkFBQyxRQUFEO01BQU07TUFDb0Qsd0JBQUMsVUFBRCxZQUFRLFNBQWM7Ozs7O01BQUM7S0FDM0U7Ozs7YUFDSDs7Ozs7O0lBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDYix3QkFBQyxVQUFEO01BQ0UsTUFBSztNQUNMLFNBQVM7TUFDVCxXQUFVO2dCQUNYO0tBRU87Ozs7O0lBQ0w7Ozs7O0dBQ0Y7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkRvd25sb2FkTW9kYWwudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFgsIFNtYXJ0cGhvbmUsIERvd25sb2FkLCBTaGFyZTIsIENvcHksIENoZWNrLCBGaWxlQ29kZSwgRXh0ZXJuYWxMaW5rIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5cbmludGVyZmFjZSBEb3dubG9hZE1vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZE1vZGFsOiBSZWFjdC5GQzxEb3dubG9hZE1vZGFsUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzWmlwcGluZywgc2V0SXNaaXBwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiAnJztcblxuICBjb25zdCBoYW5kbGVDb3B5TGluayA9ICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY3VycmVudFVybCk7XG4gICAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDIwMDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZFppcCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNaaXBwaW5nKHRydWUpO1xuICAgICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG5cbiAgICAgIC8vIExpc3Qgb2YgcHJvamVjdCBzb3VyY2UgZmlsZXMgdG8gcGFja2FnZVxuICAgICAgY29uc3QgZmlsZVBhdGhzID0gW1xuICAgICAgICAncGFja2FnZS5qc29uJyxcbiAgICAgICAgJ3RzY29uZmlnLmpzb24nLFxuICAgICAgICAndml0ZS5jb25maWcudHMnLFxuICAgICAgICAnaW5kZXguaHRtbCcsXG4gICAgICAgICdtZXRhZGF0YS5qc29uJyxcbiAgICAgICAgJ3NyYy9tYWluLnRzeCcsXG4gICAgICAgICdzcmMvQXBwLnRzeCcsXG4gICAgICAgICdzcmMvaW5kZXguY3NzJyxcbiAgICAgICAgJ3NyYy9nYW1lL2NvbG9ycy50cycsXG4gICAgICAgICdzcmMvZ2FtZS9lbmdpbmUudHMnLFxuICAgICAgICAnc3JjL2dhbWUvbGV2ZWxzLnRzJyxcbiAgICAgICAgJ3NyYy9nYW1lL2F1ZGlvLnRzJyxcbiAgICAgICAgJ3NyYy9nYW1lL3N0b3JhZ2UudHMnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvVG9wQmFyLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9UdWJlLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9HYW1lSFVELnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9MZXZlbFNlbGVjdE1vZGFsLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9XaW5Nb2RhbC50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvQ3VzdG9tTGV2ZWxNb2RhbC50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvSGVscE1vZGFsLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9Eb3dubG9hZE1vZGFsLnRzeCcsXG4gICAgICAgICdwdWJsaWMvbWFuaWZlc3QuanNvbicsXG4gICAgICAgICdwdWJsaWMvaWNvbi5zdmcnLFxuICAgICAgXTtcblxuICAgICAgLy8gRmV0Y2ggZWFjaCBmaWxlIGNvbnRlbnQgZnJvbSBkZXYgc2VydmVyXG4gICAgICBmb3IgKGNvbnN0IHBhdGggb2YgZmlsZVBhdGhzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC8ke3BhdGh9YCk7XG4gICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgICAgICAgICB6aXAuZmlsZShwYXRoLCB0ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvdWxkIG5vdCBidW5kbGUgJHtwYXRofWAsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGhlbHBmdWwgUkVBRE1FLm1kXG4gICAgICB6aXAuZmlsZShcbiAgICAgICAgJ1JFQURNRS5tZCcsXG4gICAgICAgIGAjIEFxdWFTb3J0IC0gV2F0ZXIgQ29sb3IgUHV6emxlXFxuXFxuSnVlZ28gZGUgcm9tcGVjYWJlemFzIGRlIGNsYXNpZmljYWNpw7NuIGRlIGFndWEgY29uIDEwMCBuaXZlbGVzIHkgY29sb3JlcyBkaXN0aW5naWJsZXMuXFxuXFxuIyMgSW5zdGFsYWNpw7NuIHkgZWplY3VjacOzbiBsb2NhbDpcXG5cXGBcXGBcXGBiYXNoXFxubnBtIGluc3RhbGxcXG5ucG0gcnVuIGRldlxcblxcYFxcYFxcYFxcbkFicmUgaHR0cDovL2xvY2FsaG9zdDozMDAwIGVuIHR1IG5hdmVnYWRvci5gXG4gICAgICApO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBibG9iXG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSAnYXF1YXNvcnQtd2F0ZXItcHV6emxlLnppcCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgemlwOicsIGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzWmlwcGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkb3dubG9hZC1tb2RhbC10aXRsZVwiXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLXNsYXRlLTk1MC82MCBiYWNrZHJvcC1ibHVyLXhzIGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi0yMDBcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwIHJvdW5kZWQtMnhsIHctZnVsbCBtYXgtdy1sZyBwLTYgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0byBzaGFkb3ctMnhsXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTMgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8U21hcnRwaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtc2t5LTYwMCBkYXJrOnRleHQtc2t5LTQwMFwiIC8+XG4gICAgICAgICAgICA8aDIgaWQ9XCJkb3dubG9hZC1tb2RhbC10aXRsZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSBmb250LWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgRGVzY2FyZ2FyIGVuIGlQaG9uZSAxM1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtNzAwIGRhcms6aG92ZXI6dGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ymctc2xhdGUtMTAwIGRhcms6aG92ZXI6Ymctc2xhdGUtODAwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDZXJyYXIgbW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogT3B0aW9uIDE6IEluc3RhbGwgYXMgQXBwIG9uIEhvbWUgU2NyZWVuIChQV0EpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC00IHJvdW5kZWQteGwgYmctc2t5LTUwLzcwIGRhcms6Ymctc2t5LTk1MC8zMCBib3JkZXIgYm9yZGVyLXNreS0yMDAgZGFyazpib3JkZXItc2t5LTg1MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQtc2t5LTkwMCBkYXJrOnRleHQtc2t5LTIwMCB0ZXh0LXNtIG1iLTJcIj5cbiAgICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXNreS02MDAgZGFyazp0ZXh0LXNreS00MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+T3BjacOzbiAxOiBJbnN0YWxhciBjb21vIEFwcCBlbiBsYSBwYW50YWxsYSBkZSBpbmljaW8gKFJlY29tZW5kYWRvKTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNjAwIGRhcms6dGV4dC1zbGF0ZS0zMDAgbWItMyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIFBlcm1pdGUganVnYXIgZW4gcGFudGFsbGEgY29tcGxldGEsIHNpbiBiYXJyYXMgZGUgbmF2ZWdhY2nDs24geSBjb24gY2FyZ2EgaW5zdGFudMOhbmVhOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTcwMCBkYXJrOnRleHQtc2xhdGUtMzAwIHNwYWNlLXktMiBsaXN0LWRlY2ltYWwgbGlzdC1pbnNpZGUgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1za3ktMTAwIGRhcms6Ym9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBBYnJlIGVzdGUgZW5sYWNlIGRpcmVjdGFtZW50ZSBlbiA8c3Ryb25nPlNhZmFyaTwvc3Ryb25nPiBlbiB0dSBpUGhvbmUgMTMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUb2NhIGVsIGJvdMOzbiA8c3Ryb25nPkNvbXBhcnRpcjwvc3Ryb25nPiAoaWNvbm8gZGUgY3VhZHJhZG8gY29uIHVuYSBmbGVjaGEgaGFjaWEgYXJyaWJhIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNreS02MDBcIj7ijos8L3NwYW4+IGVuIGxhIGJhcnJhIGluZmVyaW9yIGRlIFNhZmFyaSkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBCYWphIHVuIHBvY28geSBzZWxlY2Npb25hIDxzdHJvbmc+XCJBZ3JlZ2FyIGEgcGFudGFsbGEgZGUgaW5pY2lvXCI8L3N0cm9uZz4uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUb2NhIDxzdHJvbmc+XCJBZ3JlZ2FyXCI8L3N0cm9uZz4gZW4gbGEgZXNxdWluYSBzdXBlcmlvciBkZXJlY2hhLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuXG4gICAgICAgICAgey8qIENvcHkgbGluayBidXR0b24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb3B5TGlua31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgcHgtMyBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNreS0yMDAgZGFyazpib3JkZXItc2xhdGUtNzAwIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBkYXJrOnRleHQtc2xhdGUtMjAwIGhvdmVyOmJnLXNreS01MCBkYXJrOmhvdmVyOmJnLXNsYXRlLTc1MCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IGN1cnNvci1wb2ludGVyIHNoYWRvdy14c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb3BpZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC02MDAgZm9udC1zZW1pYm9sZFwiPsKhRW5sYWNlIGNvcGlhZG8hPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8Q29weSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Db3BpYXIgZW5sYWNlIHBhcmEgYWJyaXIgZW4gU2FmYXJpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBPcHRpb24gMjogRG93bmxvYWQgU291cmNlIENvZGUgWmlwICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC00IHJvdW5kZWQteGwgYmctc2xhdGUtNTAgZGFyazpiZy1zbGF0ZS04NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtc20gbWItMS41XCI+XG4gICAgICAgICAgICA8RmlsZUNvZGUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwIGRhcms6dGV4dC1lbWVyYWxkLTQwMFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5PcGNpw7NuIDI6IERlc2NhcmdhciBlbCBDw7NkaWdvIEZ1ZW50ZSAoLnppcCk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBkYXJrOnRleHQtc2xhdGUtNDAwIG1iLTMgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICBEZXNjYXJnYSB1biBhcmNoaXZvIFpJUCBjb24gdG9kb3MgbG9zIGFyY2hpdm9zIGRlbCBwcm95ZWN0byAoY8OzZGlnbyBSZWFjdCwgVHlwZVNjcmlwdCwgbml2ZWxlcywgZXN0aWxvcykgZGlyZWN0YW1lbnRlIGEgbGEgYXBwIDxzdHJvbmc+QXJjaGl2b3MgKEZpbGVzKTwvc3Ryb25nPiBvIGlDbG91ZCBEcml2ZSBkZSB0dSBpUGhvbmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWRaaXB9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNaaXBwaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBweC00IGJnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57aXNaaXBwaW5nID8gJ0NvbXByaW1pZW5kbyBwcm95ZWN0by4uLicgOiAnRGVzY2FyZ2FyIGFxdWFzb3J0LXdhdGVyLXB1enpsZS56aXAnfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE9wdGlvbiAzOiBFeHBvcnQgZnJvbSBBSSBTdHVkaW8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTMgYmctc2xhdGUtMTAwLzYwIGRhcms6Ymctc2xhdGUtODAwLzQwIHJvdW5kZWQteGwgdGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDAgZGFyazp0ZXh0LXNsYXRlLTQwMCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXNsYXRlLTQwMCBtdC0wLjUgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVGFtYmnDqW4gcHVlZGVzIGV4cG9ydGFyIGVsIHByb3llY3RvIGEgdW4gcmVwb3NpdG9yaW8gZGUgPHN0cm9uZz5HaXRIdWI8L3N0cm9uZz4gdXNhbmRvIGVsIG1lbsO6IGRlIG9wY2lvbmVzIGVuIGxhIGVzcXVpbmEgc3VwZXJpb3IgZGUgR29vZ2xlIEFJIFN0dWRpby5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDbG9zZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBiZy1zbGF0ZS05MDAgZGFyazpiZy13aGl0ZSB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGN1cnNvci1wb2ludGVyIHRleHQteHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENlcnJhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==