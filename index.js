

// this is for the unitdropdown, numinput and the result button

const input = document.querySelector("#numinput");
const unit = document.querySelector("#unitdropdown");
const resultTxt = document.querySelector("#result");

const convertUnit = () => {
	let result = "";
	switch (unit.value) {
		case "Saturn":
			result = `${input.value} Earth equals ${(input.value * 1.06).toFixed(
				2
			)} on saturn`;
			break;
		case "Solen":
			result = `${input.value} Earth equals ${(input.value * 27.01 ).toFixed(
				2
			)} on solen`;
			break;
		case "Merkur":
			result = `${input.value} Earth equals ${(input.value * 0.38).toFixed(
				2
			)} on merkur`;
			break;
		case "Venus":
			result = `${input.value} Earth equals ${(input.value * 0.91).toFixed(
				2
			)} on venus`;
			break;
		case "Jorden":
			result = `${input.value} Earth equals ${(input.value * 1).toFixed(
				2
			)} on earth`;
			break;
		case "Månen":
			result = `${input.value} Earth equals ${(input.value * 0.166).toFixed(
				2
			)} on Månen`;
			break;
		case "Mars":
			result = `${input.value} Earth equals ${(input.value * 0.38).toFixed(
				2
			)} on mars`;
			break;
		case "Jupiter":
			result = `${input.value} Earth equals ${(input.value * 2.34).toFixed(
				2
			)} on jupiter`;
			break;
		case "Uranus":
			result = `${input.value} Earth equals ${(input.value * 0.92).toFixed(
				2
			)} on uranus`;
			break;
		case "Neptun":
			result = `${input.value} Earth equals ${(input.value * 1.19).toFixed(
				2
			)} on neptun`;
			break;
		case "Pluto":
			result = `${input.value} Earth equals ${(input.value * 0.06).toFixed(
				2
			)} on pluto`;
			break;
		default:
			result = "Error!";
	}

	resultTxt.textContent = result;
};


// this is for the copy butten

function copyText() {
    const result = document.getElementById("result");
    const range = document.createRange();
    range.selectNode(result);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    showNotification("Text Copied!");
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.classList.add("notification");
    document.body.appendChild(notification);
    setTimeout(function() {
        notification.remove();
    }, 3000);
}

// this is for making the span change planets

document.addEventListener("DOMContentLoaded", function() {
    const planetNames = ["Saturn", "Earth", "Mars", "Jupitor", "Månen","Merkur", "Neptun", "Pluto", "Saturn", "Solen", "Uranus", "Venus"];
    const planetNameElement = document.getElementById("planet-name");

    let currentIndex = 0;

    setInterval(function() {
        planetNameElement.textContent = planetNames[currentIndex];
        currentIndex = (currentIndex + 1) % planetNames.length;
    }, 1000);
});

// this is for the effect of pressing a img planet it whil change the unitdropdown`s name

function changeOptions(planet) {
    const unitDropdown = document.getElementById("unitdropdown");
    unitDropdown.value = planet;
}
