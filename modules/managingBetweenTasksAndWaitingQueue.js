export const managingBetweenTasksAndWaitingQueue = function (
  tasksQueue,
  waitingQueue
) {
  // console.log(tasksQueue);
  console.log(waitingQueue);

  if (tasksQueue.length < 10) {
    console.log(waitingQueue);
    const removedElement = waitingQueue.shift();
    if (removedElement) console.log("pushhhhhh");
  }

  console.log(tasksQueue);
};
