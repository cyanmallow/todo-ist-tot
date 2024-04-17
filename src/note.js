document.getElementById("add-note").addEventListener("click", function(){
    var noteContent = prompt("Add something...");
    // add a new note
    if (noteContent){
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.textContent = noteContent;
        document.querySelector(".container").appendChild(newItem);

        // Attach event listener to new item
        newItem.addEventListener("click", function(){
            var noteContentUpdated = prompt("Edit your note...");

            if (noteContentUpdated){
                this.textContent = noteContentUpdated;
            }
        });

        // Attach event listener to existing items after adding a new item
        // addEventListenerToItems();
        saveItems();
    }
});

//load items from local storage when page loads
window.addEventListener("load", function(){
    loadItems();
})

// add event listener to new items
function addEventListenerToItems(){
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(){
            // edit note
            var noteContentUpdated = prompt("Edit your note...");

            if (noteContentUpdated){
                this.textContent = noteContentUpdated;
                saveItems();
            }
        });
    }
}
addEventListenerToItems();


//TODO: add local storage
function loadItems(){
    var noteHTML = localStorage.getItem('noteItems', noteHTML);
    if (noteHTML) {
        document.querySelector(".container").innerHTML = noteHTML;
        addEventListenerToItems();
    }
}

function saveItems(){
    var noteHTML = document.querySelector(".container").innerHTML;
    localStorage.setItem('noteItems', noteHTML);
}

//delete all
document.getElementById("clear-note").addEventListener("click", function(){
    localStorage.clear();
    alert("F5 to take effect!!")
})