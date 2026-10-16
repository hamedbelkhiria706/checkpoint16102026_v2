/**
 * ============================================================================
 * JAVASCRIPT CONCEPTS RUNNER
 * ============================================================================
 * Runs all three levels in sequence with clean section headers.
 * 
 * Usage:
 *   node index.js
 *   node level1_bitwise.js
 *   node level2_redundant.js
 *   node level3_notes_distribution.js
 */

const { bitwiseAND, bitwiseOR, bitwiseXOR } = require('./level1_bitwise');
const { redundant, redundantArrow } = require('./level2_redundant');
const { getNotesDistribution } = require('./level3_notes_distribution');

console.clear?.();
console.log("=================================================================");
console.log("             JAVASCRIPT CONCEPTS: 3-LEVEL TUTORIAL               ");
console.log("=================================================================\n");

// ----------------------------------------------------------------------------
// LEVEL 1: Bitwise Operations
// ----------------------------------------------------------------------------
console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║ LEVEL 1: Bitwise Operations                                   ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("Given: 7 (binary: 0111) and 12 (binary: 1100)\n");
console.log(`  bitwiseAND(7, 12) = ${bitwiseAND(7, 12)}  (binary: ${(bitwiseAND(7, 12)).toString(2).padStart(4, '0')})`);
console.log(`  bitwiseOR(7, 12)  = ${bitwiseOR(7, 12)} (binary: ${(bitwiseOR(7, 12)).toString(2).padStart(4, '0')})`);
console.log(`  bitwiseXOR(7, 12) = ${bitwiseXOR(7, 12)} (binary: ${(bitwiseXOR(7, 12)).toString(2).padStart(4, '0')})`);

console.log("\nGiven: 6 (binary: 00000110) and 23 (binary: 00010111)\n");
console.log(`  bitwiseAND(6, 23) = ${bitwiseAND(6, 23)}  (binary: ${(bitwiseAND(6, 23)).toString(2).padStart(8, '0')})`);
console.log(`  bitwiseOR(6, 23)  = ${bitwiseOR(6, 23)} (binary: ${(bitwiseOR(6, 23)).toString(2).padStart(8, '0')})`);
console.log(`  bitwiseXOR(6, 23) = ${bitwiseXOR(6, 23)} (binary: ${(bitwiseXOR(6, 23)).toString(2).padStart(8, '0')})`);

// ----------------------------------------------------------------------------
// LEVEL 2: A Redundant Function
// ----------------------------------------------------------------------------
console.log("\n╔═══════════════════════════════════════════════════════════════╗");
console.log("║ LEVEL 2: A Redundant Function (Closures)                     ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(`  const f1 = redundant("apple");  f1() ➞ "${f1()}" (type: ${typeof f1})`);
console.log(`  const f2 = redundant("pear");   f2() ➞ "${f2()}" (type: ${typeof f2})`);
console.log(`  const f3 = redundant("");       f3() ➞ "${f3()}" (type: ${typeof f3})`);

// ----------------------------------------------------------------------------
// LEVEL 3: Get Notes Distribution
// ----------------------------------------------------------------------------
console.log("\n╔═══════════════════════════════════════════════════════════════╗");
console.log("║ LEVEL 3: Get Notes Distribution (Filter + Reduce)            ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");

const students = [
  { "name": "Steve", "notes": [5, 5, 3, -1, 6] },
  { "name": "John",  "notes": [3, 2, 5, 0, -3] }
];

console.log("Input Students:");
console.log(JSON.stringify(students, null, 2));

const distribution = getNotesDistribution(students);
console.log("\nResulting Distribution (valid notes 1 to 5):");
console.log(distribution);

console.log("\n=================================================================");
console.log(" All levels executed successfully! See README.md for deep-dive.  ");
console.log("=================================================================");

