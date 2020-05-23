function sum_of_square(arr) {
  arr = arr.map((a) => a * a);
  return arr.reduce((a, b) => a + b, 0);
}

function square_of_sum(arr) {
  arr = arr.reduce((a, b) => a + b, 0);
  return arr * arr;
}

/** Generate array from 1 to 100 */
arr = [...Array(100).keys()].map((i) => i + 1);

console.log(square_of_sum(arr) - sum_of_square(arr));
