import { managingBetweenTasksAndWaitingQueue } from "./managingBetweenTasksAndWaitingQueue.js";

export const setTaskTimeAndRemoveIfDone = function (
  tasksQueue,
  waitingQueue,
  time
) {
  const task = setTimeout(() => {
    console.log("task nr " + task + " done after " + time / 1000 + "sec");

    // find finished task and remove from the tasksQueue
    const position = tasksQueue.findIndex((obj) => obj.taskId === task);
    const taskRemainedTime = tasksQueue[position].time;
    console.log(tasksQueue[position].time);
    tasksQueue.splice(position, 1);

    // take away time of removed element from each task in queue for update and show remaining time of each task
    tasksQueue.forEach((task) => {
      task.time = task.time - taskRemainedTime;
    });

    managingBetweenTasksAndWaitingQueue(tasksQueue, waitingQueue);
  }, time);

  return task;
};
