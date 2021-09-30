import { createNewTask } from "./createNewTask.js";
import { sortTasksQueue } from "./sortTasksQueue.js";
import { createDomElementAndPushToDomQueue } from "./DOM-manipulation/createDomElementAndPushToDomQueue.js";
import { removeDomTaskElement } from "./DOM-manipulation/removeDomTaskElement.js";

export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue
) {
  if (tasksQueue.length < 10) {
    const removedElement = waitingQueue.shift();
    console.log(removedElement);
    if (removedElement) {
      removeDomTaskElement(removedElement.taskId, waitingQueue);
      const newTask = createNewTask(removedElement.time, "main");
      tasksQueue.push(newTask);
      sortTasksQueue();
      createDomElementAndPushToDomQueue(newTask);
    }
  }
};
