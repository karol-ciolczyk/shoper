import { tasksQueue } from "../main.js";

export const sortTasksQueue = function () {
  tasksQueue.sort((task1, task2) => (task1.time > task2.time ? 1 : -1));
};
