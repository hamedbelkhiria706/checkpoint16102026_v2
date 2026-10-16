/**
 * ============================================================================
 * LEVEL 2: A Redundant Function (Closures & Higher-Order Functions)
 * ============================================================================
 * 
 * CONCEPT:
 * In JavaScript, functions are "first-class citizens". This means functions can:
 * 1. Be stored in variables
 * 2. Be passed as arguments to other functions
 * 3. Be returned from other functions (Higher-Order Functions)
 * 
 * CLOSURE:
 * When an inner function is defined inside an outer function, it forms a "closure".
 * The inner function "remembers" and maintains access to the variables of its outer
 * enclosing scope (lexical scope), even AFTER the outer function has finished executing!
 * 
 * In this problem:
 * - Calling `redundant("apple")` creates an execution context where `str = "apple"`.
 * - It returns a new anonymous function.
 * - Even though `redundant()` has returned, the returned function still holds a reference
 *   to `str` via closure.
 * - When we later call `f1()`, it retrieves and returns that remembered `str`.
 */

// --- Standard Function Syntax ---

/**
 * Takes in a string `str` and returns a function that returns `str`.
 * 
 * @param {string} str 
 * @returns {() => string} A function that returns the original string
 */
function redundant(str) {
  return function() {
    return str;
  };
}

// --- Modern Arrow Function Alternative ---
// Using ES6 arrow functions with implicit returns:
const redundantArrow = str => () => str;

// --- Demonstration & Test Cases ---
if (require.main === module) {
  console.log("=== LEVEL 2: A REDUNDANT FUNCTION ===");

  // Example 1: "apple"
  const f1 = redundant("apple");
  console.log("\n--- Test 1 ---");
  console.log("const f1 = redundant('apple')");
  console.log("Type of f1:       ", typeof f1);              // 'function'
  console.log("f1() result:      ", f1());                  // 'apple'
  console.log("Matches expected? :", f1() === "apple");

  // Example 2: "pear"
  const f2 = redundant("pear");
  console.log("\n--- Test 2 ---");
  console.log("const f2 = redundant('pear')");
  console.log("Type of f2:       ", typeof f2);              // 'function'
  console.log("f2() result:      ", f2());                  // 'pear'
  console.log("Matches expected? :", f2() === "pear");

  // Example 3: empty string ""
  const f3 = redundant("");
  console.log("\n--- Test 3 ---");
  console.log("const f3 = redundant('')");
  console.log("Type of f3:       ", typeof f3);              // 'function'
  console.log("f3() result:      ", JSON.stringify(f3()));  // '""'
  console.log("Matches expected? :", f3() === "");

  // Example 4: Testing the concise arrow function version
  console.log("\n--- Test 4 (Arrow Function Version) ---");
  const fArrow = redundantArrow("JavaScript Closures!");
  console.log("fArrow() result:  ", fArrow());

  // --- Why this matters in Real-World JavaScript ---
  console.log("\n--- Real World Applications of this Pattern ---");
  console.log("1. Function Factories (e.g., multiplier(factor))");
  console.log("2. Event Handlers & Callbacks (pre-filling arguments / currying)");
  console.log("3. Data Privacy & Encapsulation (creating private variables)");
}

// Export for module use if required
module.exports = {
  redundant,
  redundantArrow
};
