// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  switch (name) {
    case 'Pure Strawberry Joy': 
      return .5
      break;
    case 'Energizer':
      return 1.5
      break;
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
    
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
//   forEach array index in limes evaluate the name and multiply it by the number of wedges associated with that name.  Stop when the amount of wedges is < or = to the number of wedges available. compare the incoming index with the modulus for the remaining wedges


// map the key of the array to a new array with the associated number of wedgesNeeded for that value. While wedgesNeeded is greater than 0, subtract the value from each index in order from the new array. 
  
  
//   Make sure the value can be evenly subtracted wedgesNeeded t
  // let i = wedgesNeeded;
  let limesToCut = 0;
  
  while(limes.length !== 0 && wedgesNeeded > 0)  {
      switch (limes[0]) {
            case 'small':
              wedgesNeeded = wedgesNeeded - 6
              limes.shift()
              break;
            case 'medium':
              wedgesNeeded = wedgesNeeded - 8
              limes.shift()
              break;
            case 'large':
              wedgesNeeded = wedgesNeeded - 10
              limes.shift()
              break;
          }
        limesToCut++
      }
  return limesToCut
      
  }

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0])
    orders.shift();
  }

  /**Had to look at community solution.  Misinterprited the question and coded an incorrect solution.  Re-read the question and still misinterpreted the question.**/
  
  
  
  return orders;

  
  // time is in minutes
  // The time left in the shift will always be greater than 0
  // The array of juices to prepare will never be empty
  // prepared in order from index 0 of the array
  // employee will always finish an in progress order even if time left is less than or equal to 0
  // if no orders are remaining return an empty array
  // function takes number of minutes left in a shift and an array of juices that have been ordered but not prepared
  // function returns orders employee can't start to make in their shift.
}
