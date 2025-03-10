const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} 
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Done</button>`;
    
    taskList.appendChild(li);
    taskInput.value = "";
}
function deleteTask(element) {
    element.parentElement.remove();
}
function toggleComplete(element) {
    element.parentElement.classList.toggle("completed");
}

