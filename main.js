import { addTask } from "./modules/addTask.js";
import { removeDomTaskElement } from "./modules/DOM-manipulation/removeDomTaskElement.js";
import { managingBetweenTasksAndWaitingQueue } from "./modules/managingBetweenTasksAndWaitingQueue.js";

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

addButton.addEventListener("click", () => {
  addTask(tasksQueue, waitingQueue);
});

const tasksDomQueue = document.querySelector(".section-queues__queue-tasks");
const waitingDomQueue = document.querySelector(
  ".section-queues__queue-waiting"
);
tasksDomQueue.addEventListener("click", (event) => {
  event.preventDefault();
  const elementId = event.target.dataset.btnid;
  removeDomTaskElement(elementId, tasksQueue);

  // const removedElement = waitingQueue.shift();
  // const elementId = removedElement.taskId;
  // removeDomTaskElement(elementId, waitingQueue);
  managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue, true);
});
waitingDomQueue.addEventListener("click", (event) => {
  event.preventDefault();
  const elementId = event.target.dataset.btnid;
  removeDomTaskElement(elementId, waitingQueue);
});
