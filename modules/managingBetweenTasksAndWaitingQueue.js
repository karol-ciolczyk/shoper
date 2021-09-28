import { setTaskTimeAndRemoveIfDone } from "./setTaskTimeAndRemoveIfDone.js";

export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue
) {
  // console.log(tasksQueue);
  console.log(waitingQueue);

  if (tasksQueue.length < 10) {
    const removedElement = waitingQueue.shift();
    if (removedElement) {
      tasksQueue.push(removedElement);
    }
  }

  console.log(tasksQueue);
};
