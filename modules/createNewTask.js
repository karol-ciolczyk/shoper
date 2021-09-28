import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const createNewTask = function (
  tasksQueue,
  waitingQueue,
  time,
  whichTask
) {
  if (whichTask === "main") {
    const taskId = setTaskTimeAndRemoveIfDone(tasksQueue, waitingQueue, time); // triger setTimeout API function
    const newTask = { taskId, time };
    return newTask;
  } else if (whichTask === "waiting") {
    const newWaitingTask = { time };
    return newWaitingTask;
  }
};
