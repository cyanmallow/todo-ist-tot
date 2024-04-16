document.getElementById("add-item").addEventListener("click", function(){
    //prompt to add item
    var newCheck = prompt("Add an item to the checklist:");
    //TODO
    //add text
    if (newCheck){
        var newItem = document.createElement("li");
        newItem.className = "item";
        newItem.textContent = newCheck;
        document.querySelector("#checkbox").appendChild(newItem);
    }
    //add checkbox
            // Create checkbox input for the item
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "item" + (document.querySelectorAll("#checklist").length + 1); // Generate unique ID
            newItem.appendChild(checkbox);
})