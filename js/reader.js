document.getElementById("back-btn").innerText = UI_MESSAGES.backToIndex;
document.title = UI_MESSAGES.readerTitle;

document.getElementById("back-btn").addEventListener("click", function () {
	window.location.href = "index.html";
});

function renderNotes(notes) {
	const container = document.getElementById("notes-container");
	container.innerHTML = "";

	for (let i = 0; i < notes.length; i++) {
		const noteData = notes[i];
		const div = document.createElement("div");
		div.className = "note-item";

		const textArea = document.createElement("textarea");
		textArea.value = noteData.text;
		textArea.readOnly = true;

		div.appendChild(textArea);
		container.appendChild(div);
	}
}

function updateReader() {
	const retrievedData = JSON.parse(localStorage.getItem("lab1_notes")) || [];
	renderNotes(retrievedData);

	const timeString = new Date().toLocaleTimeString();
	document.getElementById("timestamp").innerText = `${UI_MESSAGES.updatedAt}${timeString}`;
}

updateReader();
setInterval(updateReader, 2000);
