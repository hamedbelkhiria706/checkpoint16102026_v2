/**
 * ============================================================================
 * LEVEL 3: Get Notes Distribution (Array Methods: Filter + Reduce)
 * ============================================================================
 * 
 * CONCEPT:
 * Functional programming in JavaScript often uses chained array methods:
 * 
 * 1. Array.prototype.flatMap() / reduce():
 *    Flattens nested arrays. In this case, extracting the `notes` arrays from
 *    each student object into a single flat list of notes.
 * 
 * 2. Array.prototype.filter():
 *    Creates a shallow copy of a portion of an array containing only elements
 *    that pass the test implemented by the provided callback function.
 *    Here, we only keep valid notes: [1, 2, 3, 4, 5].
 * 
 * 3. Array.prototype.reduce():
 *    Executes a "reducer" callback on each element of the array, passing the
 *    result of calculation on the previous element (the accumulator).
 *    Here, the accumulator is an object `{}` that tallies occurrences of each note.
 */

// Set or array of allowed valid notes
const VALID_NOTES = new Set([1, 2, 3, 4, 5]);

/**
 * Checks whether a given note is a valid note (1, 2, 3, 4, or 5).
 * @param {any} note 
 * @returns {boolean}
 */
function isValidNote(note) {
  return VALID_NOTES.has(note);
}

/**
 * Calculates the distribution of valid notes across all students using filter + reduce.
 * 
 * @param {Array<{name: string, notes: number[]}>} students 
 * @returns {Record<string, number>} Object with note frequencies
 */
function getNotesDistribution(students) {
  if (!Array.isArray(students)) return {};

  return students
    // Step 1: Flatten all student notes into a single array
    .flatMap(student => Array.isArray(student?.notes) ? student.notes : [])
    
    // Step 2: FILTER out any notes that are not 1, 2, 3, 4, or 5
    .filter(isValidNote)
    
    // Step 3: REDUCE the array of notes into a frequency object
    .reduce((distribution, note) => {
      // If note already exists in the object, increment its count; otherwise start at 1
      distribution[note] = (distribution[note] || 0) + 1;
      return distribution;
    }, {});
}

/**
 * Alternative approach using strictly only `reduce` and `filter` without flatMap:
 */
function getNotesDistributionReduceOnly(students) {
  if (!Array.isArray(students)) return {};

  return students.reduce((acc, student) => {
    if (!Array.isArray(student?.notes)) return acc;

    // Filter each student's notes
    const validNotes = student.notes.filter(isValidNote);

    // Accumulate counts into the result object
    for (const note of validNotes) {
      acc[note] = (acc[note] || 0) + 1;
    }
    return acc;
  }, {});
}

// --- Demonstration & Step-by-Step Breakdown ---
if (require.main === module) {
  console.log("=== LEVEL 3: GET NOTES DISTRIBUTION ===");

  const sampleStudents = [
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6]
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3]
    }
  ];

  console.log("\nInput Data:");
  console.log(JSON.stringify(sampleStudents, null, 2));

  console.log("\n--- Step-by-Step Execution Trace ---");

  // Step 1: Flattened
  const allRawNotes = sampleStudents.flatMap(s => s.notes);
  console.log("1. All raw notes extracted :", allRawNotes);

  // Step 2: Filtered
  const filteredNotes = allRawNotes.filter(isValidNote);
  console.log("2. Filtered valid notes     :", filteredNotes);
  console.log("   (Ignored invalid notes   : [-1, 6, 0, -3])");

  // Step 3: Reduced
  console.log("3. Tallying with reduce()...");
  let stepAcc = {};
  filteredNotes.forEach((note, index) => {
    stepAcc[note] = (stepAcc[note] || 0) + 1;
    console.log(`   Step ${index + 1}: processed note ${note} -> current accumulator:`, JSON.stringify(stepAcc));
  });

  // Final Result
  const result = getNotesDistribution(sampleStudents);
  console.log("\nFinal getNotesDistribution result:");
  console.log(result);

  // --- Additional Edge Cases ---
  console.log("\n--- Edge Case Testing ---");

  // Edge Case 1: Empty input
  console.log("Empty array []        ➞", getNotesDistribution([]));

  // Edge Case 2: Only invalid notes
  console.log("Only invalid notes    ➞", getNotesDistribution([
    { name: "Alice", notes: [-5, 0, 10, 99] }
  ]));

  // Edge Case 3: Missing or null notes property
  console.log("Missing notes field   ➞", getNotesDistribution([
    { name: "Bob" },
    { name: "Charlie", notes: [4, 4, 1] }
  ]));
}

// Export for module use if required
module.exports = {
  getNotesDistribution,
  getNotesDistributionReduceOnly,
  isValidNote
};
