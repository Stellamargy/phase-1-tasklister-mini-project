document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const myToDo = document.querySelector("#tasks");
  const newTaskdescribed = document.querySelector("#new-task-description");
  const taskForm = document.querySelector("#create-task-form");

  const validInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };

  const toAddTask = (event) => {
    event.preventDefault();
    toGetTask();
  };

  const toGetTask = () => {
    const task = newTaskdescribed.value;
    if (validInput(task)) {
      creatingTask(task);
    }
  };

  const creatingTask = (taskContent) => {
    const task = document.createElement("li");
    task.textContent = taskContent;
    myToDo.appendChild(task);
    taskForm.reset();
  };

  taskForm.addEventListener("submit", toAddTask);
});