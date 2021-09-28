import { pushObjectIntoArray } from "./pushObjectIntoArray.js";
import { createNewTask } from "./createNewTask.js";
import { getRandomTime } from "./random-time.js";

export const addTask = function (tasksQueue, waitingQueue, timeBetweenClicks) {
  const time = getRandomTime(5, 10) * 1000;

  if (tasksQueue.length < 10) {
    const newTask = createNewTask(tasksQueue, waitingQueue, time, "main");
    pushObjectIntoArray(newTask, tasksQueue);
  } else {
    const newTask = createNewTask(tasksQueue, waitingQueue, time, "waiting");
    pushObjectIntoArray(newTask, waitingQueue);
  }

  if (timeBetweenClicks) {
    tasksQueue.forEach((task) => (task.time = task.time - timeBetweenClicks));
  }
  tasksQueue.sort((task1, task2) => (task1.time > task2.time ? -1 : 1));
};
