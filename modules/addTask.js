import { pushObjectIntoArray } from "./pushObjectIntoArray.js";
import { createNewTask } from "./createNewTask.js";
import { getRandomTime } from "./random-time.js";
import { sortTasksQueue } from "./sortTasksQueue.js";

export const addTask = function (tasksQueue, waitingQueue) {
  const time = getRandomTime(5, 10) * 1000;

  if (tasksQueue.length < 10) {
    const newTask = createNewTask(time, "main");
    pushObjectIntoArray(newTask, tasksQueue);
  } else {
    const newTask = createNewTask(time, "waiting");
    pushObjectIntoArray(newTask, waitingQueue);
  }
  sortTasksQueue();
};
