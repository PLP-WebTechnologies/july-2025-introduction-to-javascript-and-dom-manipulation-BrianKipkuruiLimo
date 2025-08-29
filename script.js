// Part 1: Variable Declarations and Conditionals
// --------------------------------------------
// Declaring variables for task management
const maxTasks = 10;
let taskCount = 0;
let isListEmpty = true;

// Array to store tasks
let tasks = [];

// Conditional to check if the list is empty
if (taskCount === 0) {
    console.log("No tasks in the list yet!");
} else {
    console.log(`You have ${taskCount} tasks.`);
}

// Part 2: Custom Functions
// --------------------------------------------
// Function 1: Add a task to the tasks array
function addTask(taskText) {
    if (taskText.trim() === "") {
        return "Error: Task cannot be empty!";
    }
    if (taskCount >= maxTasks) {
        return `Error: Cannot add more than ${maxTasks} tasks!`;
    }
    tasks.push({ text: taskText, completed: false });
    taskCount++;
    isListEmpty = false;
    return "Task added successfully!";
}

// Function 2: Format task count message
function getTaskCountMessage(count) {
    return `Tasks: ${count} / ${maxTasks}`;
}

// Log initial task count message
console.log(getTaskCountMessage(taskCount));

// Part 3: Loop Examples
// --------------------------------------------
// Loop 1: For loop to log tasks (if any)
for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1}: ${tasks[i].text} (Completed: ${tasks[i].completed})`);
}

// Loop 2: forEach loop to log task indices
tasks.forEach((task, index) => {
    console.log(`Task index ${index}: ${task.text}`);
});

// Part 4: DOM Interactions
// --------------------------------------------
// DOM Interaction 1: Add a new task to the list
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    const result = addTask(taskText);
    if (result === "Task added successfully!") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="completeBtn">Complete</button>`;
        taskList.appendChild(li);
        taskCounter.textContent = getTaskCountMessage(taskCount);
        taskInput.value = ""; // Clear input
    } else {
        alert(result); // Show error
    }
});

// DOM Interaction 2: Toggle task completion
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("completeBtn")) {
        const li = event.target.parentElement;
        const taskIndex = Array.from(taskList.children).indexOf(li);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        li.classList.toggle("completed");
        console.log(`Task "${tasks[taskIndex].text}" completion: ${tasks[taskIndex].completed}`);
    }
});

// DOM Interaction 3: Clear all tasks
const clearTasksBtn = document.getElementById("clearTasksBtn");

clearTasksBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    tasks = [];
    taskCount = 0;
    isListEmpty = true;
    taskCounter.textContent = getTaskCountMessage(taskCount);
    console.log("All tasks cleared!");
});