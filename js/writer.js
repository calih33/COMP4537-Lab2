let notesArray = [];

function saveNotes() {
	const dataToSave = [];

	for (let i = 0; i < notesArray.length; i++) {
		dataToSave.push(notesArray[i].getText());
	}

	localStorage.setItem("lab1_notes", JSON.stringify(dataToSave));

	const timeString = new Date().toLocaleTimeString();
	document.getElementById("timestamp").innerText = `${UI_MESSAGES.storedAt}${timeString}`;
}

class Note {
	constructor(text = "") {
		this.id = Date.now() + Math.random();
		this.container = document.createElement("div");
		this.container.className = "note-item";

		this.textArea = document.createElement("textarea");
		this.textArea.value = text;

		this.removeBtn = document.createElement("button");
		this.removeBtn.innerText = UI_MESSAGES.removeNote;
		const currentNote = this;
		this.removeBtn.onclick = function () {
			currentNote.remove();
		};

		this.container.appendChild(this.textArea);
		this.container.appendChild(this.removeBtn);
		document.getElementById("notes-container").appendChild(this.container);
	}

	remove() {
		this.container.remove();
		const remainingNotes = [];

		for (let i = 0; i < notesArray.length; i++) {
			if (notesArray[i].id !== this.id) {
				remainingNotes.push(notesArray[i]);
			}
		}

		notesArray = remainingNotes;
		saveNotes();
	}

	getText() {
		return { text: this.textArea.value };
	}
}

document.getElementById("add-btn").innerText = UI_MESSAGES.addNote;
document.getElementById("back-btn").innerText = UI_MESSAGES.backToIndex;
document.title = UI_MESSAGES.writerTitle;

document.getElementById("back-btn").addEventListener("click", function () {
	window.location.href = "index.html";
});

document.getElementById("add-btn").addEventListener("click", function () {
	notesArray.push(new Note(""));
});

const existingNotes = JSON.parse(localStorage.getItem("lab1_notes")) || [];
for (let i = 0; i < existingNotes.length; i++) {
	notesArray.push(new Note(existingNotes[i].text));
}

setInterval(function () {
	saveNotes();
}, 2000);
