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
        addEventListenerToItems();
    }
});

// add event listener to new items
function addEventListenerToItems(){
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(){
            // edit note
            var noteContentUpdated = prompt("Edit your note...");

            if (noteContentUpdated){
                this.textContent = noteContentUpdated;
            }
        });
    }
}
