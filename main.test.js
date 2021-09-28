import { getRandomTime } from "./modules/random-time.js";

test("random time(numer)", () => {
  const value = getRandomTime(5, 10);
  expect(value).toBeGreaterThanOrEqual(5);
  expect(value).toBeLessThanOrEqual(10);
});
