import { managingBetweenTasksAndWaitingQueue } from "./managingBetweenTasksAndWaitingQueue.js";

import { tasksQueue } from "../main.js";
import { waitingQueue } from "../main.js";
import { doneQueue } from "../main.js";

export const setTaskTimeAndRemoveIfDone = function (time) {
  const task = setTimeout(() => {
    console.log("task nr " + task + " done after " + time / 1000 + "sec");

    // find finished task and remove from the tasksQueue
    const position = tasksQueue.findIndex((obj) => obj.taskId === task);
    const removedItem = tasksQueue.splice(position, 1); // remove item and return array of removed
    doneQueue.push(removedItem);

    // find dom-task-element and remove from DOM:
    const taskToRemove = document.querySelector(`p[data-id="${task}"]`);
    taskToRemove.classList.add("task-hide");
    setTimeout(() => {
      taskToRemove.remove();
    }, 300);

    managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue);
  }, time);

  return task;
};
