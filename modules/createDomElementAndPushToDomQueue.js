import { tasksQueue } from "../main.js";

export const createDomElementAndPushToDomQueue = function (task) {
  const waitingDomQueue = document.querySelector(
    ".section-queues__queue-waiting"
  );
  const tasksDomQueue = document.querySelector(".section-queues__queue-tasks");
  const doneDomQueue = document.querySelector(".section-queues__queue-done");

  const content = task.taskId
    ? `task nr: ${task.taskId}`
    : `task time: ${task.time}`;
  const pElement = document.createElement("p");
  pElement.textContent = content;

  if (!task.isWaiting && !task.isDone) {
    pElement.classList.add("task--executing");
    pElement.setAttribute(`data-id`, `${task.taskId}`);

    const taskPosition = tasksQueue.findIndex(
      (obj) => obj.taskId === task.taskId
    );
    if (taskPosition === 0) {
      tasksDomQueue.prepend(pElement);
    } else {
      const BeforeSiblingPosition = taskPosition - 1;
      const BeforeSiblingTask = tasksQueue[BeforeSiblingPosition];
      const BeforeSiblingId = BeforeSiblingTask.taskId;
      const BeforeSiblingDomElement = document.querySelector(
        `p[data-id="${BeforeSiblingId}"]`
      );
      console.log(BeforeSiblingDomElement);
      BeforeSiblingDomElement.insertAdjacentElement("afterend", pElement);
    }
  }
  if (task.isWaiting && !task.isDone) {
    pElement.classList.add("task--waiting");
    waitingDomQueue.append(pElement);
  }
  if (task.isDone) {
    pElement.classList.add("task--done");
    pElement.classList.add("task--appear");
    doneDomQueue.append(pElement);
  }
};
