export const createDomElementsP = function (tasks) {
  return tasks.map((task) => {
    const content = task.taskId
      ? `task nr: ${task.taskId}`
      : `task time: ${task.time}`;
    const pElement = document.createElement("p");
    pElement.textContent = content;

    if (!task.isWaiting && !task.isDone) {
      pElement.classList.add("task--executing");
      pElement.setAttribute(`data-id`, `${task.taskId}`);
    }
    if (task.isWaiting && !task.isDone) {
      pElement.classList.add("task--waiting");
    }
    if (task.isDone) {
      pElement.classList.add("task--done");
    }
    return pElement;
  });
};
