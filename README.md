# JavaScript Concepts: 3-Level Guide

This project contains hands-on explanations and runnable code for three fundamental JavaScript concepts:

1. **Level 1: Bitwise Operations (`&`, `|`, `^`)**
2. **Level 2: Closures & Higher-Order Functions (`redundant`)**
3. **Level 3: Data Aggregation with Array Methods (`filter` + `reduce`)**

---

## 📁 File Structure

| File | Concept | Description |
| :--- | :--- | :--- |
| [`level1_bitwise.js`](./level1_bitwise.js) | Bitwise Operations | Binary representation, `.toString(2)`, AND, OR, XOR functions |
| [`level2_redundant.js`](./level2_redundant.js) | Closures & HOFs | Returning functions, lexical scope, variable retention |
| [`level3_notes_distribution.js`](./level3_notes_distribution.js) | Array Methods | Filtering valid notes and tallying frequency with `reduce()` |
| [`index.js`](./index.js) | Master Runner | Runs demonstrations for all 3 levels in sequence |

---

## 🚀 How to Run the Files

Ensure you have [Node.js](https://nodejs.org/) installed, then run any of the following commands in your terminal:

```bash
# Run all levels together
node index.js

# Or run individual levels with detailed step-by-step traces
node level1_bitwise.js
node level2_redundant.js
node level3_notes_distribution.js
```

---

## 📖 Deep-Dive Explanations

### Level 1: Bitwise Operations

#### Concept
Numbers in JavaScript are typically 64-bit floating-point numbers. However, whenever you use a bitwise operator (`&`, `|`, `^`, `~`, `<<`, `>>`), JavaScript temporarily converts the operands into **32-bit signed integers**, performs the operation on each individual bit pair, and converts the result back.

#### Binary Representation
Any decimal number can be converted to binary in JavaScript using `.toString(2)`:
```javascript
(6).toString(2)    // "110"
(23).toString(2)   // "10111"

// Pad with leading zeros to visualize an 8-bit byte:
(6).toString(2).padStart(8, '0')   // "00000110"
(23).toString(2).padStart(8, '0')  // "00010111"
```

#### The Operators

1. **Bitwise AND (`&`)**:
   - Compares each bit; yields `1` **only if both** bits are `1`.
   ```
     00000110  (6)
   & 00010111  (23)
   ----------
     00000110  (6)
   ```

2. **Bitwise OR (`|`)**:
   - Compares each bit; yields `1` if **at least one** bit is `1`.
   ```
     00000110  (6)
   | 00010111  (23)
   ----------
     00010111  (23)
   ```

3. **Bitwise XOR (`^`)** *(Exclusive OR)*:
   - Compares each bit; yields `1` if the bits are **different**, and `0` if they are identical.
   ```
     00000110  (6)
   ^ 00010111  (23)
   ----------
     00010001  (17)
   ```

#### Implementations:
```javascript
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}
```

---

### Level 2: A Redundant Function (Closures & Higher-Order Functions)

#### Concept
In JavaScript, functions are **first-class citizens**:
- They can be assigned to variables.
- They can be passed as arguments into other functions.
- They can be returned from other functions (known as **Higher-Order Functions**).

#### Closures & Lexical Scope
A **closure** is created when an inner function retains access to variables in its outer lexical scope, even after the outer function has finished executing.

```javascript
function redundant(str) {
  // `str` is in the scope of `redundant`
  return function() {
    // The inner function closes over `str`
    return str;
  };
}

// Or concisely using ES6 arrow functions:
const redundantArrow = str => () => str;
```

#### How it works:
```javascript
const f1 = redundant("apple"); // `redundant` completes and returns an inner function
console.log(typeof f1);        // "function"
console.log(f1());             // "apple" (the inner function still has access to `str`)
```

When `redundant("apple")` is called, the JavaScript engine allocates memory for the parameter `str = "apple"`. Normally, local variables are garbage-collected when a function returns. However, because the inner function holds a reference to `str`, JavaScript preserves `str` in memory.

---

### Level 3: Get Notes Distribution (`filter` + `reduce`)

#### Concept
This exercise illustrates the power of functional array transformations:
- **`flatMap()`**: Flattens nested student notes arrays into one flat list.
- **`filter()`**: Drops all notes outside the valid range `[1, 2, 3, 4, 5]`.
- **`reduce()`**: Iterates through the valid notes and builds a frequency map (tally object).

#### Implementation:
```javascript
const VALID_NOTES = new Set([1, 2, 3, 4, 5]);

function getNotesDistribution(students) {
  if (!Array.isArray(students)) return {};

  return students
    // 1. Flatten all notes into one single array
    .flatMap(student => Array.isArray(student?.notes) ? student.notes : [])
    // 2. Keep only valid notes (1, 2, 3, 4, 5)
    .filter(note => VALID_NOTES.has(note))
    // 3. Count frequencies into an object
    .reduce((distribution, note) => {
      distribution[note] = (distribution[note] || 0) + 1;
      return distribution;
    }, {});
}
```

#### Trace of `reduce()` Accumulator:
Input:
```json
[
  { "name": "Steve", "notes": [5, 5, 3, -1, 6] },
  { "name": "John",  "notes": [3, 2, 5, 0, -3] }
]
```
1. Extracted notes: `[5, 5, 3, -1, 6, 3, 2, 5, 0, -3]`
2. Filtered notes: `[5, 5, 3, 3, 2, 5]`
3. `reduce()` transitions:
   - Initial accumulator: `{}`
   - Process `5`: `{ 5: 1 }`
   - Process `5`: `{ 5: 2 }`
   - Process `3`: `{ 5: 2, 3: 1 }`
   - Process `3`: `{ 5: 2, 3: 2 }`
   - Process `2`: `{ 5: 2, 3: 2, 2: 1 }`
   - Process `5`: `{ 5: 3, 3: 2, 2: 1 }`
4. Result: `{ 2: 1, 3: 2, 5: 3 }`

