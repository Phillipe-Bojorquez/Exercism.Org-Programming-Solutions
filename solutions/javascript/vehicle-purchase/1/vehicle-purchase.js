// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {

  const vehicleNeedsLicense = (kind === 'truck' || kind ==='car') ?  true : false;

  return vehicleNeedsLicense;
  //Keeping if / else solution for anyone who needs it.
  // if (kind === 'truck' || kind ==='car') {
  //   return true;
  // } else {
  //   return false;
  // }
}


/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {

  let vehicleChoice = (option1 > option2) ? `${option2} is clearly the better choice.`: `${option1} is clearly the better choice.`;

  return vehicleChoice;
  // Keeping if / else solution for anyone who needs it.
  // if (option1 > option2) {
  //   return `${option2} is clearly the better choice.`;
  // } else {
  //   return `${option1} is clearly the better choice.`;
  // }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let newPrice = (age < 3) ? originalPrice * .80 :
    (age > 10)? originalPrice * .50 : originalPrice * .70;

  return newPrice;

  // Keeping if /else if / else solution for anyone who needs it
  // if (age < 3) {
  //   return (originalPrice * .80) ;
  // } else if (age > 10) {
  //   return (originalPrice * .50);
  // } else {
  //   return ;
  // }
}
