const UI_MESSAGES = {
    indexTitle: "Lab 1: JSON, Object Constructor, localStorage",
    writerTitle: "Writer",
    readerTitle: "Reader",
    studentName: "Cali H",
    writerPage: "Writer Page",
    readerPage: "Reader Page",
    addNote: "add",
    removeNote: "remove",
    backToIndex: "Back to Home Page",
    storedAt: "stored at: ",
    updatedAt: "updated at: "
};

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("title")) {
        document.title = UI_MESSAGES.indexTitle;
        document.getElementById("title").innerText = UI_MESSAGES.indexTitle;
        document.getElementById("student-name").innerText = UI_MESSAGES.studentName;
        document.getElementById("link-writer").innerText = UI_MESSAGES.writerPage;
        document.getElementById("link-reader").innerText = UI_MESSAGES.readerPage;
    }
});
