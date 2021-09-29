import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const createNewTask = function (time, whichTask) {
  if (whichTask === "main") {
    const taskId = setTaskTimeAndRemoveIfDone(time); // triger setTimeout API function
    const newTask = {
      taskId,
      time,
      initialTime: time,
      isDone: false,
      isWaiting: false,
    };
    return newTask;
  } else if (whichTask === "waiting") {
    const newWaitingTask = { time, isDone: false, isWaiting: true };
    return newWaitingTask;
  }
};
