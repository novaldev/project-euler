const x = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const pf = [];

function lcm(arr, d = 2) {
  if (arr.every((a) => a === 1)) return 1;

  const y = arr.map((i) => (i % d === 0 ? i / d : i));
  const compare = y.every((v, i) => v === arr[i]);

  if (compare) {
    d++;
    return lcm(arr, d);
  } else {
    return d * lcm(y, d);
  }
}

console.log(lcm(x));
