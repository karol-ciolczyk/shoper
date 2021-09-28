import { createNewTask } from "./createNewTask.js";
import { sortTasksQueue } from "./sortTasksQueue.js";
// import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue
) {
  // console.log(tasksQueue);
  // console.log(waitingQueue);

  if (tasksQueue.length < 10) {
    const removedElement = waitingQueue.shift();
    if (removedElement) {
      const newTask = createNewTask(removedElement.time, "main");
      tasksQueue.push(newTask);
      sortTasksQueue();
    }
  }

  console.log(tasksQueue);
};
