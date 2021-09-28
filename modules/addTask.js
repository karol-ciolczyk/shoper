import { pushObjectIntoArray } from "./pushObjectIntoArray.js";
import { createNewTask } from "./createNewTask.js";

export const addTask = function (tasksQueue, waitingQueue, timeBetweenClicks) {
  // const time = getRandomTime(5, 10) * 1000;
  console.log(createNewTask(tasksQueue, waitingQueue));

  if (tasksQueue.length < 10) {
    // const taskId = setTaskTimeAndRemoveIfDone(tasksQueue, waitingQueue, time); // triger setTimeout API function
    // const newTask = { taskId, time };
    const newTask = createNewTask(tasksQueue, waitingQueue, "main");
    pushObjectIntoArray(newTask, tasksQueue);
  } else {
    // const waitingTask = { time };
    const newTask = createNewTask(tasksQueue, waitingQueue, "waiting");
    pushObjectIntoArray(newTask, waitingQueue);
  }

  if (timeBetweenClicks) {
    tasksQueue.forEach((task) => (task.time = task.time - timeBetweenClicks));
  }
  tasksQueue.sort((task1, task2) => (task1.time > task2.time ? -1 : 1));
};
