const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");

// Function to create a new task item
function createTaskItem(taskText) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskTextElement = document.createElement("p");
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", addTask);

// Allow adding tasks by pressing Enter key
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
