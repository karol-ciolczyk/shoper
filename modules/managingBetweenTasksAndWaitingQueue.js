import { createNewTask } from "./createNewTask.js";
import { sortTasksQueue } from "./sortTasksQueue.js";

export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue
) {
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
