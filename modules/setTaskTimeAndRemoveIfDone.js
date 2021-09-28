import { managingBetweenTasksAndWaitingQueue } from "./managingBetweenTasksAndWaitingQueue.js";

export const setTaskTimeAndRemoveIfDone = function (
  tasksQueue,
  waitingQueue,
  time
) {
  const task = setTimeout(() => {
    console.log("task nr " + task + " done after " + time / 1000 + "sec");

    const position = tasksQueue.findIndex((obj) => obj.taskId === task);
    // console.log(position);
    tasksQueue.splice(position, 1);
    console.log(tasksQueue);

    managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue);
  }, time);

  return task;
};
