// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0
  for(let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  // did not solve.  Had to look at community solution.
  const firstIndex = (week - 1) * 7; // 7 
  const lastIndex = (7 * week); // index 13
// This task is similar to the first one. You can copy your code as a starting point.
  let count = 0
  for (let i = firstIndex; i < lastIndex; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {

  for(let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i] += 1;
  }
  
  return birdsPerDay;
}

