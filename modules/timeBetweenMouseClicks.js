export const getTimeBetweenMouseClicks = function (clicksArray, tasksQueue) {
  const now = Date.now();
  clicksArray.push(now);

  clicksArray = tasksQueue.length === 0 ? (clicksArray = []) : clicksArray;

  if (clicksArray.length > 1) {
    const lastClick = clicksArray[clicksArray.length - 1];
    const beforeLastClick = clicksArray[clicksArray.length - 2];
    const timeBetweenClicks = lastClick - beforeLastClick;
    return timeBetweenClicks;
  }
};
