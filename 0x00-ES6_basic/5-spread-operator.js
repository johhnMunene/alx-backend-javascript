export default function concatArrays(array1, array2, string) {
// Combine arrays using the spread operator (...) for efficient concatenation
  return [...array1, ...array2, string];
}
