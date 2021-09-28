import { addTask } from "./modules/addTask.js";
import { getTimeBetweenMouseClicks } from "./modules/timeBetweenMouseClicks.js";

export const tasksQueue = [];
export const waitingQueue = [];
export const doneTasks = [];
const clicksArray = [];

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
  addTask(tasksQueue, waitingQueue, timeBetweenClicks);
});

const showBtn = document.querySelector(".btn--show");
showBtn.addEventListener("click", () => {
  console.log(doneTasks);
});
