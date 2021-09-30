import { tasksQueue } from "../../main.js";

export const createDomElementAndPushToDomQueue = function (task, isComming) {
  const waitingDomQueue = document.querySelector(
    ".section-queues__queue-waiting"
  );
  const tasksDomQueue = document.querySelector(".section-queues__queue-tasks");
  const doneDomQueue = document.querySelector(".section-queues__queue-done");

  const content = task.isWaiting
    ? `waiting nr: ${task.taskId}`
    : `task nr: ${task.taskId}`;
  const pElement = document.createElement("p");
  pElement.textContent = content;
  pElement.setAttribute(`data-id`, `${task.taskId}`);
  const deleteButton = document.createElement("a");
  deleteButton.textContent = "x";
  deleteButton.setAttribute("href", "");
  deleteButton.setAttribute("data-btnid", `${task.taskId}`);
  deleteButton.classList.add("btn-delete");

  if (!task.isWaiting && !task.isDone) {
    pElement.append(deleteButton);
    pElement.classList.add("task--executing");
    if (isComming) pElement.classList.add("task--comming");

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
      BeforeSiblingDomElement.insertAdjacentElement("afterend", pElement);
    }
  }
  if (task.isWaiting && !task.isDone) {
    pElement.classList.add("task--waiting");
    pElement.append(deleteButton);
    waitingDomQueue.append(pElement);
  }
  if (task.isDone) {
    pElement.classList.add("task--done");
    pElement.classList.add("task--appear");
    doneDomQueue.append(pElement);
  }
};
