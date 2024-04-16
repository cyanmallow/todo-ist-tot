document.getElementById("add-item").addEventListener("click", function(){
    //prompt to add item
    var newCheck = prompt("Add an item to the checklist:");
    //add text
    if (newCheck){
        //create new item
        var newItem = document.createElement("li");
        newItem.className = "item";

        //create checkbox input for the item
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //append checkbox and text to new item
        newItem.appendChild(checkbox);
        newItem.appendChild(document.createTextNode(newCheck));

        //append new item to the checklist
        document.getElementById("checkbox").appendChild(newItem);
    }
})

// THE BELOW PART IS FOR THE NOTE PART, I MISTOOK THE TWO
// local storage
//save note data to local storage
function saveNotesToLocalStorage(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

//retrieve notes data from local storage
function getNotesFromLocalStorage(){
    var notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
}

//display notes on the page
function displayNotes(notes){
    var container = document.querySelector(".container");
    container.innerHTML = '';

    notes.forEach(function(noteContent){
        //create new item
        var newItem = document.createElement("li");
        newItem.className = "item";

        //create checkbox input for the item
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //set the text input of the list item
        newItem.textContent = noteContent;

        //append checkbox and text to new item
        newItem.appendChild(checkbox);
        newItem.appendChild(document.createTextNode(newCheck));

        //append new item to the checklist
        container.appendChild(newItem);
    })
}

//initializing the page
function init(){
    var notes = getNotesFromLocalStorage();
    displayNotes(notes);
}

init();