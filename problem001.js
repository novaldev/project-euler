const LIMIT = 1000;

const sumInRange = (n, l) => {
  const length = Math.floor((l - 1) / n);
  const array = [...Array(length).keys()].map((i) => (i + 1) * n);
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};

const sum =
  sumInRange(3, LIMIT) + sumInRange(5, LIMIT) - sumInRange(3 * 5, LIMIT);

console.log(sum);
