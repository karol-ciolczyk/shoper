import { addTask } from "./modules/addTask.js";
import { getTimeBetweenMouseClicks } from "./modules/timeBetweenMouseClicks.js";

const tasksQueue = [];
const waitingQueue = [];
const clicksArray = [];

const addButton = document.querySelector(".btn--add");

addButton.addEventListener("click", (event) => {
  const timeBetweenClicks = getTimeBetweenMouseClicks(clicksArray, tasksQueue);
  console.log(timeBetweenClicks);

  addTask(tasksQueue, waitingQueue, timeBetweenClicks);
});
