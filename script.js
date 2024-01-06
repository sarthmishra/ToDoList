function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskList = document.getElementById("task-list");
    var taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
