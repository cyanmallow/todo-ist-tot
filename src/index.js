document.getElementById("add").addEventListener("click", function(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("date").value;
    var priority = document.getElementById("importance").checked ? "Important" : "Normal";

    if (title && description && dueDate){
        var table = document.getElementById("todoTable");
        var newRow = table.insertRow(-1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.textContent = title;
        cell2.textContent = description;
        cell3.textContent = dueDate;
        cell4.textContent = priority;

        document.getElementById("title").value = '';
        document.getElementById("description").value = '';
        document.getElementById("date").value = '';
        document.getElementById("importance").checked = false;
    }
});

