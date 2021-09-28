import { getRandomTime } from "./random-time.js";
import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const createNewTask = function (tasksQueue, waitingQueue, whichTask) {
  const time = getRandomTime(5, 10) * 1000;

  console.log(tasksQueue);

  if (whichTask === "main") {
    const taskId = setTaskTimeAndRemoveIfDone(tasksQueue, waitingQueue, time); // triger setTimeout API function
    const newTask = { taskId, time };
    return newTask;
  } else if (whichTask === "waiting") {
    const newWaitingTask = { time };
    return newWaitingTask;
  }
};
