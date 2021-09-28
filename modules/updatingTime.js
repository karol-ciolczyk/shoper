export const updatingTimeOfTasks = function (tasksQueue) {
  setInterval(() => {
    if (tasksQueue.length > 0) {
      tasksQueue.forEach((task) => (task.time = task.time - 100));
    }
  }, 100);
};
