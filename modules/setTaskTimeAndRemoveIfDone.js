import { managingBetweenTasksAndWaitingQueue } from "./managingBetweenTasksAndWaitingQueue.js";
import { createDomElementAndPushToDomQueue } from "./DOM-manipulation/createDomElementAndPushToDomQueue.js";
// queue objects:
import { tasksQueue } from "../main.js";
import { waitingQueue } from "../main.js";
import { doneQueue } from "../main.js";

export const setTaskTimeAndRemoveIfDone = function (time, timeForLog) {
  const print = timeForLog ? timeForLog : time;
  const task = setTimeout(() => {
    console.log("task nr " + task + " finished after " + print / 1000 + "sec");

    // find finished task and remove from the tasksQueue
    const position = tasksQueue.findIndex((obj) => obj.taskId === task);
    const removedItem = tasksQueue.splice(position, 1); // remove item and return array of removed
    removedItem[0].isDone = true;
    doneQueue.push(removedItem[0]);

    // find dom-task-element and remove from DOM:
    const taskToRemove = document.querySelector(`p[data-id="${task}"]`);
    taskToRemove.classList.remove("task--comming");
    taskToRemove.classList.add("task--hide");
    setTimeout(() => {
      taskToRemove.remove();
    }, 300);

    // create and add dom task element
    createDomElementAndPushToDomQueue(removedItem[0]);

    managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue);
  }, time);

  return task;
};
