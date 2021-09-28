import { addTask } from "./modules/addTask.js";
import { getTimeBetweenMouseClicks } from "./modules/timeBetweenMouseClicks.js";
import { updatingTimeOfTasks } from "./modules/updatingTime.js";

export const tasksQueue = [];
export const waitingQueue = [];
export const doneTasks = [];
const clicksArray = [];

updatingTimeOfTasks(tasksQueue);

const addButton = document.querySelector(".btn--add");

addButton.addEventListener("click", (event) => {
  const timeBetweenClicks = getTimeBetweenMouseClicks(clicksArray, tasksQueue);
  console.log(timeBetweenClicks);

  addTask(tasksQueue, waitingQueue, timeBetweenClicks);
});

const showBtn = document.querySelector(".btn--show");
showBtn.addEventListener("click", () => {
  console.log(doneTasks);
});
