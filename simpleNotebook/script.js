// selectors
let htmlInputForm = document.querySelector("#input-form");
let htmlNoteList = document.querySelector("#storage");

// Event Listeners
htmlInputForm.addEventListener("submit", addNote);

// Functions
function addNote(e) {
  e.preventDefault();

  let htmlNoteValue = document.querySelector("#note").value;
  if (!htmlNoteValue) {
    // if there is no text
    alert("یادداشت خالی!");
  } else {
    // create note <p>
    const newNoteDiv = document.createElement("div");
    const newNoteP = document.createElement("p");
    newNoteP.appendChild(document.createTextNode(htmlNoteValue));
    newNoteDiv.appendChild(newNoteP);

    // create removeBtn
    const newRemoveDiv = document.createElement("div");
    const newRemoveBtn = document.createElement("a");
    newRemoveBtn.textContent = "x";
    newRemoveBtn.classList.add("remove-btn");
    newRemoveDiv.appendChild(newRemoveBtn);

    // place note and removeBtn in a container
    const newNoteContainer = document.createElement("div");
    newNoteContainer.classList.add("notes");
    newNoteContainer.appendChild(newNoteDiv);
    newNoteContainer.appendChild(newRemoveDiv);

    // add the container to the page
    htmlNoteList.appendChild(newNoteContainer);
  }

  // reset the form
  this.reset();
}