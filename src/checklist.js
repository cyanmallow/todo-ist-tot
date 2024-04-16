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

        //add checklist to storage
        saveChecklistItems();
    }
})
// Function to load checklist items from localStorage
function loadChecklistItems() {
    var savedState = localStorage.getItem('checklistState');
    if (savedState) {
        var checklistState = JSON.parse(savedState);

        checklistState.forEach(function(itemState){
            var newItem= document.createElement("li");
            newItem.className = "item";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = itemState.checked;

            newItem.appendChild(checkbox);
            newItem.appendChild(document.createTextNode(itemState.text));

            document.getElementById("checkbox").appendChild(newItem);
        });
    }
}


// Function to save checklist items to localStorage
function saveChecklistItems() {
    //the below only added text into storage, and not the box
    // var checklistHTML = document.getElementById("checkbox").innerHTML;
    // localStorage.setItem('checklistItems', checklistHTML);

    var checklistItems = document.querySelectorAll("#checkbox .item");
    var checklistState = []

    checklistItems.forEach(function(item){
        var text = item.textContent.trim();
        var isChecked = item.querySelector("input[type='checkbox']").checked;
        checklistState.push({ text: text, checked: isChecked });
    });

localStorage.setItem('checklistState', JSON.stringify(checklistState));
}


// Event listener to save checklist items when a checkbox is clicked
document.getElementById("checkbox").addEventListener("change", function(event) {
    // Save the checklist items to localStorage
    saveChecklistItems();
});

// Load checklist items from localStorage when the page loads
window.addEventListener("load", function() {
    loadChecklistItems();
});

document.getElementById("clear-item").addEventListener("click", function(){
    localStorage.clear();
    alert("F5 to take effect!");
})