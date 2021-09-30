export const removeDomTaskElement = function (id, queue) {
  if (id) {
    const taskIndex = queue.findIndex((task) => task.taskId === +id);
    console.log(taskIndex);
    if (taskIndex > -1) {
      queue.splice(taskIndex, 1);
    }

    clearTimeout(id);
    const removingElement = document.querySelector(`p[data-id="${id}"]`);
    removingElement.remove();
  }
};
