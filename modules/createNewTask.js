import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const createNewTask = function (time, whichTask) {
  if (whichTask === "main") {
    const taskId = setTaskTimeAndRemoveIfDone(time); // triger setTimeout API function
    const newTask = { taskId, time };
    return newTask;
  } else if (whichTask === "waiting") {
    const newWaitingTask = { time };
    return newWaitingTask;
  }
};
