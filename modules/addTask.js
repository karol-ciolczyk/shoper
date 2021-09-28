import { getRandomTime } from "./random-time.js";
import { pushObjectIntoArray } from "./pushObjectIntoArray.js";
import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const addTask = function (tasksQueue, waitingQueue, timeBetweenClicks) {
  const time = getRandomTime(5, 10) * 1000;
  const taskId = setTaskTimeAndRemoveIfDone(tasksQueue, waitingQueue, time);
  const newTask = { taskId, time };

  if (tasksQueue.length < 10) {
    pushObjectIntoArray(newTask, tasksQueue);
  } else {
    pushObjectIntoArray(newTask, waitingQueue);
  }

  if (timeBetweenClicks) {
    tasksQueue.forEach((task) => (task.time = task.time - timeBetweenClicks));
  }
  tasksQueue.sort((task1, task2) => (task1.time > task2.time ? -1 : 1));
  // console.log(" taskQueue: ", tasksQueue);
  // console.log(" waitingQueue: ", waitingQueue);
};
