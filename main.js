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

// const showBtn = document.querySelector(".btn--show");
// showBtn.addEventListener("click", () => {
//   alert(JSON.stringify(tasksQueue));
// });
