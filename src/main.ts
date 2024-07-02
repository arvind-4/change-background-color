import "./style/main.css";

const script = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonChange: HTMLElement | null =
	document.getElementById("button-change");
const color: HTMLElement | null = document.querySelector(".color");
const buttonReset: HTMLElement | null = document.getElementById("button-reset");

buttonChange?.addEventListener("click", () => {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += script[getRandomNumber()];
	}
	if (color) {
		color.textContent = hexColor;
	}

	document.body.style.background = hexColor;
});

buttonReset?.addEventListener("click", () => {
	const hexColor: string = "#FFFFFF";
	(color as HTMLElement).textContent = hexColor;
	document.body.style.background = hexColor;
});

function getRandomNumber() {
	return Math.floor(Math.random() * script.length);
}
