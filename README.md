
# QuickSort with Functional Programming

This project demonstrates a functional programming approach to the QuickSort algorithm in TypeScript.

## Description

QuickSort is a sorting algorithm that works by dividing a large array into smaller sub-arrays, then sorting those sub-arrays recursively. In this implementation, the sorting is done using functional programming principles like lambda functions (also known as anonymous functions) and recursion.

The project includes:
- The `quicksort` function which sorts an array of numbers using the QuickSort algorithm.
- The `filter` function which is used to partition the array into elements smaller than or greater than the pivot.

## Code Explanation

### `quicksort(xs: number[]): number[]`

- The `quicksort` function is the main function that performs the sorting.
- It selects a `pivot` element from the input array `xs` and splits the array into two parts: one with values less than or equal to the pivot, and the other with values greater than the pivot.
- It then recursively sorts these two parts and combines them together with the pivot in between.

### `filter(xs: number[], func: (x: number) => boolean): number[]`

- The `filter` function recursively filters an array based on the provided condition in the `func` argument.
- It checks if each element meets the condition and includes it in the result if it does.

## Example

### Input

```typescript
let arr = [10, 2, 5, 3, 1, 6, 7, 4, 2, 3, 4, 8, 9];
console.log(quicksort(arr));
```

### Output

```bash
[1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]
```

## How to Run the Code

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Samrawitgebremaryam/Quick-Sort-with-Functional-Programming.git
   ```

2. Install TypeScript if not already installed:

   ```bash
   npm install -g typescript
   ```

3. Compile the TypeScript code:

   ```bash
   tsc quicksort.ts
   ```

4. Run the compiled JavaScript code:

   ```bash
   node quicksort.js
   ```
