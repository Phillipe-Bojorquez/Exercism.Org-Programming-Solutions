// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // if separator is an empty string, concatonates without a separator.
  array1 = array1.join('')
  array2 = array2.join('')
  return Number(array1) + Number(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedValue = Number(String(value).split('').reverse().join(''));

  let reversedComparison = (value === reversedValue) ?  true : false;
  return reversedComparison;

  /*Keeping if/else structure for comparison 
  if (value === reversedValue) {
    return true;
  } else {
    return false;
  };*/
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input = "") {
  // input = String(input);
  if (!input) {
    return "Required field";
  } else if (!Number(input)) {
    return 'Must be a number besides 0'
  } else {
    console.log(!input)
    console.log(!Boolean(input))
    console.log(input)
    return ''
  }

  // If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
  // If the user types something but deletes it again, the variable will be an empty string.
  // Before the user even started typing, the variable can be undefined or null.
  
  
}
