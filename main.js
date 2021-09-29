import { addTask } from "./modules/addTask.js";
import { createDomElementsP } from "./modules/createDomElementP.js";

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
const domTasksQueue = document.querySelector(".section-queues__queue-tasks");
const domWaitingTasksQueue = document.querySelector(
  ".section-queues__queue-waiting"
);

addButton.addEventListener("click", (event) => {
  addTask(tasksQueue, waitingQueue);
  const newDomTasks = createDomElementsP(tasksQueue);

  // remove previous tasks
  const previousDomTasks = document.querySelectorAll(".task--executing");
  const previousDomWaitingTasks = document.querySelectorAll(".task--waiting");
  previousDomTasks.forEach((task) => task.remove());
  previousDomWaitingTasks.forEach((task) => task.remove());

  newDomTasks.forEach((task) => {
    domTasksQueue.append(task);
  });

  if (waitingQueue.length > 0) {
    const newDomWaitingTasks = createDomElementsP(waitingQueue);
    console.log(newDomWaitingTasks);

    newDomWaitingTasks.forEach((task) => {
      domWaitingTasksQueue.append(task);
    });
  }
});

// const showBtn = document.querySelector(".btn--show");
// showBtn.addEventListener("click", () => {
//   alert(JSON.stringify(tasksQueue));
// });
