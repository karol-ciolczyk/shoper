import { createNewTask } from "./createNewTask.js";
import { sortTasksQueue } from "./sortTasksQueue.js";
import { createDomElementAndPushToDomQueue } from "./DOM-manipulation/createDomElementAndPushToDomQueue.js";
import { removeDomTaskElement } from "./DOM-manipulation/removeDomTaskElement.js";

export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue,
  force
) {
  console.log(tasksQueue);
  if (tasksQueue.length < 10 || force) {
    const removedElement = waitingQueue.shift();
    if (removedElement) {
      removeDomTaskElement(removedElement.taskId, waitingQueue);
      const newTask = createNewTask(removedElement.time, "main");
      tasksQueue.push(newTask);
      sortTasksQueue();

      createDomElementAndPushToDomQueue(newTask, true);
    }
  }
};
