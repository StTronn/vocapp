export const pickRandom = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

export const MODES = { normal: "Learning", test: "Test" };
