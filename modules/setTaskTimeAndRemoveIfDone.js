import { managingBetweenTasksAndWaitingQueue } from "./managingBetweenTasksAndWaitingQueue.js";
import { createDomElementsP } from "./createDomElementP.js";

import { tasksQueue } from "../main.js";
import { waitingQueue } from "../main.js";
import { doneQueue } from "../main.js";

export const setTaskTimeAndRemoveIfDone = function (time) {
  const task = setTimeout(() => {
    console.log("task nr " + task + " done after " + time / 1000 + "sec");

    // find finished task and remove from the tasksQueue
    const position = tasksQueue.findIndex((obj) => obj.taskId === task);
    const removedItem = tasksQueue.splice(position, 1); // remove item and return array of removed
    removedItem[0].isDone = true;
    doneQueue.push(removedItem[0]);

    // find dom-task-element and remove from DOM:
    const taskToRemove = document.querySelector(`p[data-id="${task}"]`);
    taskToRemove.classList.add("task-hide");
    setTimeout(() => {
      taskToRemove.remove();
    }, 300);

    // if doneQueue is not empty - create dom elements and push there
    // fisrtly remove previous elemets
    const previousDoneTasks = document.querySelectorAll(".task--done");
    previousDoneTasks.forEach((task) => task.remove());

    if (doneQueue.length > 0) {
      const domDoneQueue = document.querySelector(
        ".section-queues__queue-done"
      );
      const newDomDoneTasks = createDomElementsP(doneQueue);
      newDomDoneTasks.forEach((DomDoneTask) =>
        domDoneQueue.append(DomDoneTask)
      );
    }

    // console.log(doneQueue);
    managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue);
  }, time);

  return task;
};
