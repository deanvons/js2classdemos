

/**
 * Adds two numbers together
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number} Sum of params
 * @example
 * ```js
 * const sum = addNumbers(3,5)
 * console.log(sum)
 * ```
 */
export function addNumbers(num1, num2) {
  return num1 + num2;
}

/**
 * Adds two numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {number} [divisor=2] Value to divide by (2 by default)
 * @returns {number} Sum of params
 */
export function addNumbersAndHalve(a, b, divisor = 2) {
  return (a + b) / divisor;
}

/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Adds two numbers together
 * @param {NumberLike} a
 * @param {NumberLike} b
 */
export function addNumberLikes(a, b) {
  return a + b;
}

// discuss the problem typescript solves as it starts to emerge now

/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * @param {Object} Duck Object representing a Duck
 * @param {number} duck.a "a" ducks id tag
 * @param {string} duck.b "b" ducks name
 * @returns {string} String with duck's info
 */
export function objectStringify(duck) {
    return `Ducks name is ${duck.name}` 
  }