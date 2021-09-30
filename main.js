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

const removeDomTaskElement = function (event, queue) {
  event.preventDefault();
  const elementId = event.target.dataset.btnid;

  if (elementId) {
    const taskIndex = queue.findIndex((task) => task.taskId === elementId);
    queue.splice(taskIndex, 1);

    clearTimeout(elementId);
    const removingElement = document.querySelector(`p[data-id="${elementId}"]`);
    removingElement.remove();
  }
};

const tasksDomQueue = document.querySelector(".section-queues__queue-tasks");
const waitingDomQueue = document.querySelector(
  ".section-queues__queue-waiting"
);
tasksDomQueue.addEventListener("click", (event) => {
  removeDomTaskElement(event, tasksQueue);
});
waitingDomQueue.addEventListener("click", (event) => {
  removeDomTaskElement(event, waitingQueue);
});
