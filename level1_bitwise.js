/**
 * ============================================================================
 * LEVEL 1: Bitwise Operations in JavaScript
 * ============================================================================
 * 
 * CONCEPT:
 * In JavaScript, numbers are typically stored as 64-bit floating-point values
 * (IEEE 754 standard). However, when bitwise operators (&, |, ^, ~, <<, >>) 
 * are applied, JavaScript temporarily converts the operands into 32-bit signed
 * integers, operates on each corresponding bit (0 or 1), and returns a standard
 * JavaScript number.
 * 
 * 1. Bitwise AND (&):
 *    Returns 1 if BOTH corresponding bits are 1; otherwise returns 0.
 * 
 * 2. Bitwise OR (|):
 *    Returns 1 if AT LEAST ONE corresponding bit is 1; otherwise returns 0.
 * 
 * 3. Bitwise XOR (^):
 *    "Exclusive OR" - Returns 1 if the bits are DIFFERENT (one is 1, one is 0);
 *    returns 0 if both bits are the same.
 * 
 * HELPFUL JAVASCRIPT METHOD:
 * number.toString(2) converts a decimal number to its binary representation.
 */

// --- Function Definitions ---

/**
 * Calculates the bitwise AND of two numbers.
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

/**
 * Calculates the bitwise OR of two numbers.
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function bitwiseOR(n1, n2) {
  return n1 | n2;
}

/**
 * Calculates the bitwise XOR of two numbers.
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

// --- Visual Helper for Learning ---

/**
 * Formats a number into a padded binary string (e.g., 8-bit).
 * @param {number} num 
 * @param {number} bitLength 
 * @returns {string}
 */
function toBinary(num, bitLength = 8) {
  // Use >>> 0 for unsigned 32-bit conversion if negative
  return (num >>> 0).toString(2).padStart(bitLength, '0');
}

/**
 * Helper to display a step-by-step visual of the bitwise calculation.
 */
function showBitwiseBreakdown(a, b, opName, opSymbol, result) {
  console.log(`\nOperation: ${opName} (${a} ${opSymbol} ${b})`);
  console.log(`  ${String(a).padStart(3)} in binary: ${toBinary(a)}`);
  console.log(`  ${String(b).padStart(3)} in binary: ${toBinary(b)}`);
  console.log(`  ${''.padStart(19, '-')}`);
  console.log(`  ${String(result).padStart(3)} in binary: ${toBinary(result)}`);
}

// --- Demonstration & Test Cases ---
if (require.main === module) {
  console.log("=== LEVEL 1: BITWISE OPERATIONS ===");

  // Example 1: 6 and 23
  const a1 = 6, b1 = 23;
  console.log(`\nTesting with numbers: ${a1} and ${b1}`);
  showBitwiseBreakdown(a1, b1, "AND", "&", bitwiseAND(a1, b1));
  showBitwiseBreakdown(a1, b1, "OR",  "|", bitwiseOR(a1, b1));
  showBitwiseBreakdown(a1, b1, "XOR", "^", bitwiseXOR(a1, b1));

  // Example 2: 7 and 12 (from prompt specifications)
  const a2 = 7, b2 = 12;
  console.log(`\n-----------------------------------------`);
  console.log(`Testing prompt examples: ${a2} and ${b2}`);
  console.log(`bitwiseAND(${a2}, ${b2}) ➞ ${bitwiseAND(a2, b2)} (Expected: 4)`);
  console.log(`bitwiseOR(${a2}, ${b2})  ➞ ${bitwiseOR(a2, b2)}  (Expected: 15)`);
  console.log(`bitwiseXOR(${a2}, ${b2}) ➞ ${bitwiseXOR(a2, b2)} (Expected: 11)`);

  showBitwiseBreakdown(a2, b2, "AND", "&", bitwiseAND(a2, b2));
  showBitwiseBreakdown(a2, b2, "OR",  "|", bitwiseOR(a2, b2));
  showBitwiseBreakdown(a2, b2, "XOR", "^", bitwiseXOR(a2, b2));
}

// Export for module use if required
module.exports = {
  bitwiseAND,
  bitwiseOR,
  bitwiseXOR,
  toBinary,
  showBitwiseBreakdown
};
