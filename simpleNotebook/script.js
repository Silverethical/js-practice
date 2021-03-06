// selectors
let htmlInputForm = document.querySelector("#input-form"),
  htmlNoteList = document.querySelector("#storage");

// array of all saved notes
let notesArray = [];

// check if there are notes from before
if (
  !!localStorage.getItem("notes") &&
  JSON.parse(localStorage.getItem("notes")).length > 0
) {
  notesArray = JSON.parse(localStorage.getItem("notes"));

  for (let i = 0; i < notesArray.length; i++) {
    addNoteToPage(notesArray[i]);
  }
}

function addNoteToPage(noteText) {
  // create removeBtn inside <div>
  const newRemoveDiv = document.createElement("div");
  const newRemoveBtn = document.createElement("a");
  newRemoveBtn.textContent = "x";
  newRemoveBtn.classList.add("remove-btn");
  newRemoveBtn.addEventListener("click", removeNote);
  newRemoveDiv.appendChild(newRemoveBtn);

  // create note <p> inside <div>
  let newNoteDiv = document.createElement("div");
  let newNoteP = document.createElement("p");
  newNoteP.appendChild(document.createTextNode(noteText));
  newNoteDiv.appendChild(newNoteP);

  // place note and removeBtn in a container
  const newNoteContainer = document.createElement("div");
  newNoteContainer.classList.add("notes");
  let htmlNotesDiv = document.querySelectorAll(".notes");
  newNoteContainer.setAttribute("id", htmlNotesDiv.length);
  newNoteContainer.appendChild(newNoteDiv);
  newNoteContainer.appendChild(newRemoveBtn);
  newNoteContainer.addEventListener("click", selectNote);

  // add the container to the page
  htmlNoteList.appendChild(newNoteContainer);
}

// add note to page
function addNewNote(e) {
  e.preventDefault();

  let htmlNoteValue = document.querySelector("#note").value;
  if (!htmlNoteValue) {
    // if there is no text
    alert("یادداشت خالی!");
  } else {
    // add new note to page
    addNoteToPage(htmlNoteValue);

    // add new note to LocalStorage
    notesArray.push(htmlNoteValue);
    localStorage.setItem("notes", JSON.stringify(notesArray));

    // reset the form
    this.reset();
  }
}

function removeNote(e, targetParent = this.parentElement) {
  // remove note from array
  notesArray.splice(targetParent.id, 1);

  // remove note from page
  targetParent.remove();

  // adjust LocalStorage
  localStorage.setItem("notes", JSON.stringify(notesArray));

  // adjust id of .notes
  let htmlNotesDiv = document.querySelectorAll(".notes");
  for (let i = 0; i < htmlNotesDiv.length; i++) {
    htmlNotesDiv[i].setAttribute("id", i);
  }
}

// Event Listeners
htmlInputForm.addEventListener("submit", addNewNote);

let selectedNote;
function selectNote() {
  if (!!selectedNote) {
    selectedNote.classList.remove("focus");
  }
  selectedNote = this;
  selectedNote.classList.toggle("focus");
  document.addEventListener("keydown", keyLogger);
}

function keyLogger(e) {
  if (e.code == "Backspace" || e.code == "Delete") {
    removeNote(selectedNote, selectedNote);
  }
}
