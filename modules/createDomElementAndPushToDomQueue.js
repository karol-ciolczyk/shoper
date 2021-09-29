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
    tasksDomQueue.append(pElement);
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
