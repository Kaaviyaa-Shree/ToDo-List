function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed when clicked
    span.onclick = function() {
        this.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#10006;"; // Delete (X) button
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field after adding
    taskInput.value = "";
}