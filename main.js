import { addTask } from "./modules/addTask.js";

export const tasksQueue = [];
export const waitingQueue = [];
export const doneQueue = [];

// set interval to update task time
setInterval(() => {
  if (tasksQueue.length > 0) {
    tasksQueue.forEach((task) => (task.time = task.time - 100));
  }
  if (waitingQueue.length > 0) {
    waitingQueue.forEach((task) => (task.time = task.time + 100));
  }
}, 100);

const addButton = document.querySelector(".btn--add");

addButton.addEventListener("click", (event) => {
  addTask(tasksQueue, waitingQueue);
});

const tasksDomQueue = document.querySelector(".section-queues__queue-tasks");
tasksDomQueue.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target.dataset.btnid);
  const timeoutId = event.target.dataset.btnid;

  clearTimeout(timeoutId);

  const removingElement = document.querySelector(`p[data-id="${timeoutId}"]`);
  removingElement.remove();
});
