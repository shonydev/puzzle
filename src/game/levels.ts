import { COLOR_KEYS } from "/src/game/colors.ts";
import { generateSolvableLevel } from "/src/game/engine.ts";
// Handcrafted tutorial levels for 1-5 to guarantee gentle learning curve
const HANDCRAFTED_LEVELS = {
	1: [
		[
			"red",
			"blue",
			"red",
			"blue"
		],
		[
			"blue",
			"red",
			"blue",
			"red"
		],
		[]
	],
	2: [
		[
			"yellow",
			"red",
			"yellow",
			"red"
		],
		[
			"red",
			"yellow",
			"red",
			"yellow"
		],
		[]
	],
	3: [
		[
			"blue",
			"emerald",
			"blue",
			"emerald"
		],
		[
			"emerald",
			"yellow",
			"emerald",
			"yellow"
		],
		[
			"yellow",
			"blue",
			"yellow",
			"blue"
		],
		[]
	],
	4: [
		[
			"red",
			"yellow",
			"blue",
			"red"
		],
		[
			"yellow",
			"emerald",
			"emerald",
			"yellow"
		],
		[
			"blue",
			"blue",
			"red",
			"emerald"
		],
		[
			"emerald",
			"blue",
			"yellow",
			"red"
		],
		[],
		[]
	],
	5: [
		[
			"purple",
			"cyan",
			"orange",
			"purple"
		],
		[
			"orange",
			"cyan",
			"purple",
			"cyan"
		],
		[
			"cyan",
			"orange",
			"purple",
			"orange"
		],
		[],
		[]
	]
};
export function getDifficulty(levelId) {
	if (levelId <= 10) return "beginner";
	if (levelId <= 25) return "easy";
	if (levelId <= 50) return "medium";
	if (levelId <= 75) return "hard";
	return "expert";
}
export function getDifficultyLabel(diff) {
	switch (diff) {
		case "beginner": return "Principiante";
		case "easy": return "Fácil";
		case "medium": return "Medio";
		case "hard": return "Desafiante";
		case "expert": return "Maestro";
	}
}
export function getDifficultyColor(diff) {
	switch (diff) {
		case "beginner": return "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400";
		case "easy": return "text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-400";
		case "medium": return "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400";
		case "hard": return "text-orange-600 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-400";
		case "expert": return "text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400";
	}
}
/**
* Generates configuration parameters for level `id`.
*/
function getLevelParams(id) {
	let colorCount;
	let emptyCount = 2;
	if (id <= 3) {
		colorCount = 2;
		emptyCount = 1;
	} else if (id <= 8) {
		colorCount = 3;
		emptyCount = 1;
	} else if (id <= 15) {
		colorCount = 3;
		emptyCount = 2;
	} else if (id <= 25) {
		colorCount = 4;
		emptyCount = 2;
	} else if (id <= 40) {
		colorCount = 5;
		emptyCount = 2;
	} else if (id <= 55) {
		colorCount = 6;
		emptyCount = 2;
	} else if (id <= 70) {
		colorCount = 7;
		emptyCount = 2;
	} else if (id <= 85) {
		colorCount = 8;
		emptyCount = 2;
	} else if (id <= 95) {
		colorCount = 9;
		emptyCount = 2;
	} else {
		colorCount = 10;
		emptyCount = 2;
	}
	// Pick diverse distinct colors
	const colorList = COLOR_KEYS.slice(0, colorCount);
	return {
		colorCount,
		emptyCount,
		colorList
	};
}
// Memory cache for level data
const levelCache = new Map();
export function getLevel(id) {
	if (levelCache.has(id)) {
		return levelCache.get(id);
	}
	const difficulty = getDifficulty(id);
	if (HANDCRAFTED_LEVELS[id]) {
		const tubes = HANDCRAFTED_LEVELS[id].map((t) => [...t]);
		const colorSet = new Set();
		tubes.forEach((t) => t.forEach((c) => colorSet.add(c)));
		const emptyCount = tubes.filter((t) => t.length === 0).length;
		const data = {
			id,
			name: `Nivel ${id}`,
			difficulty,
			tubes,
			colorCount: colorSet.size,
			emptyCount,
			targetMoves: colorSet.size * 4 + 2
		};
		levelCache.set(id, data);
		return data;
	}
	const { colorCount, emptyCount, colorList } = getLevelParams(id);
	const seed = id * 98765 + 4321;
	const { tubes, solutionLength } = generateSolvableLevel(colorList, emptyCount, seed);
	const data = {
		id,
		name: `Nivel ${id}`,
		difficulty,
		tubes,
		colorCount,
		emptyCount,
		targetMoves: Math.max(solutionLength, colorCount * 4)
	};
	levelCache.set(id, data);
	return data;
}
export const TOTAL_LEVELS = 100;
/**
* Generate a custom level with user-defined parameters.
*/
export function generateCustomGame(colorCount, emptyCount, seed) {
	const actualSeed = seed ?? Math.floor(Math.random() * 1e6);
	const colorList = COLOR_KEYS.slice(0, Math.min(colorCount, COLOR_KEYS.length));
	const { tubes, solutionLength } = generateSolvableLevel(colorList, emptyCount, actualSeed);
	return {
		id: -1,
		name: "Partida Personalizada",
		difficulty: colorCount <= 4 ? "easy" : colorCount <= 7 ? "medium" : "hard",
		tubes,
		colorCount,
		emptyCount,
		targetMoves: Math.max(solutionLength, colorCount * 4)
	};
}
/**
* Generate daily challenge level based on date string YYYY-MM-DD.
*/
export function getDailyChallenge() {
	const today = new Date().toISOString().split("T")[0];
	let seed = 0;
	for (let i = 0; i < today.length; i++) {
		seed = (seed << 5) - seed + today.charCodeAt(i);
		seed |= 0;
	}
	const colorCount = 6;
	const emptyCount = 2;
	const colorList = COLOR_KEYS.slice(0, colorCount);
	const { tubes, solutionLength } = generateSolvableLevel(colorList, emptyCount, Math.abs(seed));
	return {
		id: 9999,
		name: `Desafío Diario (${today})`,
		difficulty: "medium",
		tubes,
		colorCount,
		emptyCount,
		targetMoves: solutionLength
	};
}

//# sourceMappingURL=data:application/json;base64,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QUNOLFlBQVksY0FBYyxJQUFJLFNBQVMsY0FBYyxJQUFJLFdBQVc7RUFDcEU7RUFDQTtFQUNBO0VBQ0EsYUFBYSxLQUFLLElBQUksZ0JBQWdCLGFBQWEsQ0FBQztDQUN0RDtBQUNGOzs7O0FBS0EsT0FBTyxTQUFTLG9CQUErQjtDQUM3QyxNQUFNLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0NBQ2xELElBQUksT0FBTztDQUNYLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztFQUNyQyxRQUFRLFFBQVEsS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDO0VBQzlDLFFBQVE7Q0FDVjtDQUNBLE1BQU0sYUFBYTtDQUNuQixNQUFNLGFBQWE7Q0FDbkIsTUFBTSxZQUFZLFdBQVcsTUFBTSxHQUFHLFVBQVU7Q0FDaEQsTUFBTSxFQUFFLE9BQU8sbUJBQW1CLHNCQUNoQyxXQUNBLFlBQ0EsS0FBSyxJQUFJLElBQUksQ0FDZjtDQUVBLE9BQU87RUFDTCxJQUFJO0VBQ0osTUFBTSxtQkFBbUIsTUFBTTtFQUMvQixZQUFZO0VBQ1o7RUFDQTtFQUNBO0VBQ0EsYUFBYTtDQUNmO0FBQ0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsibGV2ZWxzLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTE9SX0tFWVMgfSBmcm9tICcuL2NvbG9ycy50cyc7XG5pbXBvcnQgeyBUdWJlLCBnZW5lcmF0ZVNvbHZhYmxlTGV2ZWwgfSBmcm9tICcuL2VuZ2luZS50cyc7XG5cbmV4cG9ydCB0eXBlIERpZmZpY3VsdHkgPSAnYmVnaW5uZXInIHwgJ2Vhc3knIHwgJ21lZGl1bScgfCAnaGFyZCcgfCAnZXhwZXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBMZXZlbERhdGEge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpZmZpY3VsdHk6IERpZmZpY3VsdHk7XG4gIHR1YmVzOiBUdWJlW107XG4gIGNvbG9yQ291bnQ6IG51bWJlcjtcbiAgZW1wdHlDb3VudDogbnVtYmVyO1xuICB0YXJnZXRNb3ZlczogbnVtYmVyO1xufVxuXG4vLyBIYW5kY3JhZnRlZCB0dXRvcmlhbCBsZXZlbHMgZm9yIDEtNSB0byBndWFyYW50ZWUgZ2VudGxlIGxlYXJuaW5nIGN1cnZlXG5jb25zdCBIQU5EQ1JBRlRFRF9MRVZFTFM6IFJlY29yZDxudW1iZXIsIFR1YmVbXT4gPSB7XG4gIDE6IFtcbiAgICBbJ3JlZCcsICdibHVlJywgJ3JlZCcsICdibHVlJ10sXG4gICAgWydibHVlJywgJ3JlZCcsICdibHVlJywgJ3JlZCddLFxuICAgIFtdLFxuICBdLFxuICAyOiBbXG4gICAgWyd5ZWxsb3cnLCAncmVkJywgJ3llbGxvdycsICdyZWQnXSxcbiAgICBbJ3JlZCcsICd5ZWxsb3cnLCAncmVkJywgJ3llbGxvdyddLFxuICAgIFtdLFxuICBdLFxuICAzOiBbXG4gICAgWydibHVlJywgJ2VtZXJhbGQnLCAnYmx1ZScsICdlbWVyYWxkJ10sXG4gICAgWydlbWVyYWxkJywgJ3llbGxvdycsICdlbWVyYWxkJywgJ3llbGxvdyddLFxuICAgIFsneWVsbG93JywgJ2JsdWUnLCAneWVsbG93JywgJ2JsdWUnXSxcbiAgICBbXSxcbiAgXSxcbiAgNDogW1xuICAgIFsncmVkJywgJ3llbGxvdycsICdibHVlJywgJ3JlZCddLFxuICAgIFsneWVsbG93JywgJ2VtZXJhbGQnLCAnZW1lcmFsZCcsICd5ZWxsb3cnXSxcbiAgICBbJ2JsdWUnLCAnYmx1ZScsICdyZWQnLCAnZW1lcmFsZCddLFxuICAgIFsnZW1lcmFsZCcsICdibHVlJywgJ3llbGxvdycsICdyZWQnXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgXSxcbiAgNTogW1xuICAgIFsncHVycGxlJywgJ2N5YW4nLCAnb3JhbmdlJywgJ3B1cnBsZSddLFxuICAgIFsnb3JhbmdlJywgJ2N5YW4nLCAncHVycGxlJywgJ2N5YW4nXSxcbiAgICBbJ2N5YW4nLCAnb3JhbmdlJywgJ3B1cnBsZScsICdvcmFuZ2UnXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmaWN1bHR5KGxldmVsSWQ6IG51bWJlcik6IERpZmZpY3VsdHkge1xuICBpZiAobGV2ZWxJZCA8PSAxMCkgcmV0dXJuICdiZWdpbm5lcic7XG4gIGlmIChsZXZlbElkIDw9IDI1KSByZXR1cm4gJ2Vhc3knO1xuICBpZiAobGV2ZWxJZCA8PSA1MCkgcmV0dXJuICdtZWRpdW0nO1xuICBpZiAobGV2ZWxJZCA8PSA3NSkgcmV0dXJuICdoYXJkJztcbiAgcmV0dXJuICdleHBlcnQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZmljdWx0eUxhYmVsKGRpZmY6IERpZmZpY3VsdHkpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGRpZmYpIHtcbiAgICBjYXNlICdiZWdpbm5lcic6XG4gICAgICByZXR1cm4gJ1ByaW5jaXBpYW50ZSc7XG4gICAgY2FzZSAnZWFzeSc6XG4gICAgICByZXR1cm4gJ0bDoWNpbCc7XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiAnTWVkaW8nO1xuICAgIGNhc2UgJ2hhcmQnOlxuICAgICAgcmV0dXJuICdEZXNhZmlhbnRlJztcbiAgICBjYXNlICdleHBlcnQnOlxuICAgICAgcmV0dXJuICdNYWVzdHJvJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZmljdWx0eUNvbG9yKGRpZmY6IERpZmZpY3VsdHkpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGRpZmYpIHtcbiAgICBjYXNlICdiZWdpbm5lcic6XG4gICAgICByZXR1cm4gJ3RleHQtZW1lcmFsZC02MDAgYmctZW1lcmFsZC01MCBkYXJrOmJnLWVtZXJhbGQtOTUwLzQwIGRhcms6dGV4dC1lbWVyYWxkLTQwMCc7XG4gICAgY2FzZSAnZWFzeSc6XG4gICAgICByZXR1cm4gJ3RleHQtc2t5LTYwMCBiZy1za3ktNTAgZGFyazpiZy1za3ktOTUwLzQwIGRhcms6dGV4dC1za3ktNDAwJztcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuICd0ZXh0LWFtYmVyLTYwMCBiZy1hbWJlci01MCBkYXJrOmJnLWFtYmVyLTk1MC80MCBkYXJrOnRleHQtYW1iZXItNDAwJztcbiAgICBjYXNlICdoYXJkJzpcbiAgICAgIHJldHVybiAndGV4dC1vcmFuZ2UtNjAwIGJnLW9yYW5nZS01MCBkYXJrOmJnLW9yYW5nZS05NTAvNDAgZGFyazp0ZXh0LW9yYW5nZS00MDAnO1xuICAgIGNhc2UgJ2V4cGVydCc6XG4gICAgICByZXR1cm4gJ3RleHQtcHVycGxlLTYwMCBiZy1wdXJwbGUtNTAgZGFyazpiZy1wdXJwbGUtOTUwLzQwIGRhcms6dGV4dC1wdXJwbGUtNDAwJztcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgZm9yIGxldmVsIGBpZGAuXG4gKi9cbmZ1bmN0aW9uIGdldExldmVsUGFyYW1zKGlkOiBudW1iZXIpOiB7XG4gIGNvbG9yQ291bnQ6IG51bWJlcjtcbiAgZW1wdHlDb3VudDogbnVtYmVyO1xuICBjb2xvckxpc3Q6IHN0cmluZ1tdO1xufSB7XG4gIGxldCBjb2xvckNvdW50OiBudW1iZXI7XG4gIGxldCBlbXB0eUNvdW50ID0gMjtcblxuICBpZiAoaWQgPD0gMykge1xuICAgIGNvbG9yQ291bnQgPSAyO1xuICAgIGVtcHR5Q291bnQgPSAxO1xuICB9IGVsc2UgaWYgKGlkIDw9IDgpIHtcbiAgICBjb2xvckNvdW50ID0gMztcbiAgICBlbXB0eUNvdW50ID0gMTtcbiAgfSBlbHNlIGlmIChpZCA8PSAxNSkge1xuICAgIGNvbG9yQ291bnQgPSAzO1xuICAgIGVtcHR5Q291bnQgPSAyO1xuICB9IGVsc2UgaWYgKGlkIDw9IDI1KSB7XG4gICAgY29sb3JDb3VudCA9IDQ7XG4gICAgZW1wdHlDb3VudCA9IDI7XG4gIH0gZWxzZSBpZiAoaWQgPD0gNDApIHtcbiAgICBjb2xvckNvdW50ID0gNTtcbiAgICBlbXB0eUNvdW50ID0gMjtcbiAgfSBlbHNlIGlmIChpZCA8PSA1NSkge1xuICAgIGNvbG9yQ291bnQgPSA2O1xuICAgIGVtcHR5Q291bnQgPSAyO1xuICB9IGVsc2UgaWYgKGlkIDw9IDcwKSB7XG4gICAgY29sb3JDb3VudCA9IDc7XG4gICAgZW1wdHlDb3VudCA9IDI7XG4gIH0gZWxzZSBpZiAoaWQgPD0gODUpIHtcbiAgICBjb2xvckNvdW50ID0gODtcbiAgICBlbXB0eUNvdW50ID0gMjtcbiAgfSBlbHNlIGlmIChpZCA8PSA5NSkge1xuICAgIGNvbG9yQ291bnQgPSA5O1xuICAgIGVtcHR5Q291bnQgPSAyO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yQ291bnQgPSAxMDtcbiAgICBlbXB0eUNvdW50ID0gMjtcbiAgfVxuXG4gIC8vIFBpY2sgZGl2ZXJzZSBkaXN0aW5jdCBjb2xvcnNcbiAgY29uc3QgY29sb3JMaXN0ID0gQ09MT1JfS0VZUy5zbGljZSgwLCBjb2xvckNvdW50KTtcblxuICByZXR1cm4geyBjb2xvckNvdW50LCBlbXB0eUNvdW50LCBjb2xvckxpc3QgfTtcbn1cblxuLy8gTWVtb3J5IGNhY2hlIGZvciBsZXZlbCBkYXRhXG5jb25zdCBsZXZlbENhY2hlID0gbmV3IE1hcDxudW1iZXIsIExldmVsRGF0YT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExldmVsKGlkOiBudW1iZXIpOiBMZXZlbERhdGEge1xuICBpZiAobGV2ZWxDYWNoZS5oYXMoaWQpKSB7XG4gICAgcmV0dXJuIGxldmVsQ2FjaGUuZ2V0KGlkKSE7XG4gIH1cblxuICBjb25zdCBkaWZmaWN1bHR5ID0gZ2V0RGlmZmljdWx0eShpZCk7XG5cbiAgaWYgKEhBTkRDUkFGVEVEX0xFVkVMU1tpZF0pIHtcbiAgICBjb25zdCB0dWJlcyA9IEhBTkRDUkFGVEVEX0xFVkVMU1tpZF0ubWFwKCh0KSA9PiBbLi4udF0pO1xuICAgIGNvbnN0IGNvbG9yU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgdHViZXMuZm9yRWFjaCgodCkgPT4gdC5mb3JFYWNoKChjKSA9PiBjb2xvclNldC5hZGQoYykpKTtcbiAgICBjb25zdCBlbXB0eUNvdW50ID0gdHViZXMuZmlsdGVyKCh0KSA9PiB0Lmxlbmd0aCA9PT0gMCkubGVuZ3RoO1xuXG4gICAgY29uc3QgZGF0YTogTGV2ZWxEYXRhID0ge1xuICAgICAgaWQsXG4gICAgICBuYW1lOiBgTml2ZWwgJHtpZH1gLFxuICAgICAgZGlmZmljdWx0eSxcbiAgICAgIHR1YmVzLFxuICAgICAgY29sb3JDb3VudDogY29sb3JTZXQuc2l6ZSxcbiAgICAgIGVtcHR5Q291bnQsXG4gICAgICB0YXJnZXRNb3ZlczogY29sb3JTZXQuc2l6ZSAqIDQgKyAyLFxuICAgIH07XG4gICAgbGV2ZWxDYWNoZS5zZXQoaWQsIGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgeyBjb2xvckNvdW50LCBlbXB0eUNvdW50LCBjb2xvckxpc3QgfSA9IGdldExldmVsUGFyYW1zKGlkKTtcbiAgY29uc3Qgc2VlZCA9IGlkICogOTg3NjUgKyA0MzIxO1xuICBjb25zdCB7IHR1YmVzLCBzb2x1dGlvbkxlbmd0aCB9ID0gZ2VuZXJhdGVTb2x2YWJsZUxldmVsKGNvbG9yTGlzdCwgZW1wdHlDb3VudCwgc2VlZCk7XG5cbiAgY29uc3QgZGF0YTogTGV2ZWxEYXRhID0ge1xuICAgIGlkLFxuICAgIG5hbWU6IGBOaXZlbCAke2lkfWAsXG4gICAgZGlmZmljdWx0eSxcbiAgICB0dWJlcyxcbiAgICBjb2xvckNvdW50LFxuICAgIGVtcHR5Q291bnQsXG4gICAgdGFyZ2V0TW92ZXM6IE1hdGgubWF4KHNvbHV0aW9uTGVuZ3RoLCBjb2xvckNvdW50ICogNCksXG4gIH07XG5cbiAgbGV2ZWxDYWNoZS5zZXQoaWQsIGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPVEFMX0xFVkVMUyA9IDEwMDtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGN1c3RvbSBsZXZlbCB3aXRoIHVzZXItZGVmaW5lZCBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDdXN0b21HYW1lKFxuICBjb2xvckNvdW50OiBudW1iZXIsXG4gIGVtcHR5Q291bnQ6IG51bWJlcixcbiAgc2VlZD86IG51bWJlclxuKTogTGV2ZWxEYXRhIHtcbiAgY29uc3QgYWN0dWFsU2VlZCA9IHNlZWQgPz8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIGNvbnN0IGNvbG9yTGlzdCA9IENPTE9SX0tFWVMuc2xpY2UoMCwgTWF0aC5taW4oY29sb3JDb3VudCwgQ09MT1JfS0VZUy5sZW5ndGgpKTtcbiAgY29uc3QgeyB0dWJlcywgc29sdXRpb25MZW5ndGggfSA9IGdlbmVyYXRlU29sdmFibGVMZXZlbChjb2xvckxpc3QsIGVtcHR5Q291bnQsIGFjdHVhbFNlZWQpO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IC0xLFxuICAgIG5hbWU6ICdQYXJ0aWRhIFBlcnNvbmFsaXphZGEnLFxuICAgIGRpZmZpY3VsdHk6IGNvbG9yQ291bnQgPD0gNCA/ICdlYXN5JyA6IGNvbG9yQ291bnQgPD0gNyA/ICdtZWRpdW0nIDogJ2hhcmQnLFxuICAgIHR1YmVzLFxuICAgIGNvbG9yQ291bnQsXG4gICAgZW1wdHlDb3VudCxcbiAgICB0YXJnZXRNb3ZlczogTWF0aC5tYXgoc29sdXRpb25MZW5ndGgsIGNvbG9yQ291bnQgKiA0KSxcbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBkYWlseSBjaGFsbGVuZ2UgbGV2ZWwgYmFzZWQgb24gZGF0ZSBzdHJpbmcgWVlZWS1NTS1ERC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERhaWx5Q2hhbGxlbmdlKCk6IExldmVsRGF0YSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGxldCBzZWVkID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RheS5sZW5ndGg7IGkrKykge1xuICAgIHNlZWQgPSAoc2VlZCA8PCA1KSAtIHNlZWQgKyB0b2RheS5jaGFyQ29kZUF0KGkpO1xuICAgIHNlZWQgfD0gMDtcbiAgfVxuICBjb25zdCBjb2xvckNvdW50ID0gNjtcbiAgY29uc3QgZW1wdHlDb3VudCA9IDI7XG4gIGNvbnN0IGNvbG9yTGlzdCA9IENPTE9SX0tFWVMuc2xpY2UoMCwgY29sb3JDb3VudCk7XG4gIGNvbnN0IHsgdHViZXMsIHNvbHV0aW9uTGVuZ3RoIH0gPSBnZW5lcmF0ZVNvbHZhYmxlTGV2ZWwoXG4gICAgY29sb3JMaXN0LFxuICAgIGVtcHR5Q291bnQsXG4gICAgTWF0aC5hYnMoc2VlZClcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGlkOiA5OTk5LFxuICAgIG5hbWU6IGBEZXNhZsOtbyBEaWFyaW8gKCR7dG9kYXl9KWAsXG4gICAgZGlmZmljdWx0eTogJ21lZGl1bScsXG4gICAgdHViZXMsXG4gICAgY29sb3JDb3VudCxcbiAgICBlbXB0eUNvdW50LFxuICAgIHRhcmdldE1vdmVzOiBzb2x1dGlvbkxlbmd0aCxcbiAgfTtcbn1cbiJdfQ==