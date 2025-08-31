// ************ Themes ************
var themes = ["obsidian"]

var colors = {

	default: {
		1: "#5D737E",//Branch color 1
		2: "#4A5D66",//Branch color 2
		3: "#36454F",//Branch color 3
		color: "#D0D0D0",
		points: "#D0D0D0",
		locked: "#6B7D7D",
		background: "#0F1A1F",
		background_tooltip: "rgba(5, 10, 12, 0.9)",
	},
	obsidian: {
		1: "#5D737E",
		2: "#4A5D66",
		3: "#36454F",
		color: "#D0D0D0",
		points: "#D0D0D0",
		locked: "#6B7D7D",
		background: "#0F1A1F",
		background_tooltip: "rgba(5, 10, 12, 0.9)",
	},
}
function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme ? options.theme : "default";
}