import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const createNewTask = function (time, whichTask, timeForLog) {
  if (whichTask === "main") {
    const taskId = setTaskTimeAndRemoveIfDone(time, timeForLog); // triger setTimeout API function
    const newTask = {
      taskId,
      time,
      initialTime: time,
      isDone: false,
      isWaiting: false,
    };
    return newTask;
  } else if (whichTask === "waiting") {
    const randomId = Math.random().toFixed(4);
    const newWaitingTask = {
      time,
      initialTime: time,
      isDone: false,
      isWaiting: true,
      taskId: +randomId,
    };
    return newWaitingTask;
  }
};
