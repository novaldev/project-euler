function is_prime(n) {
  if (n <= 3) {
    return n > 1;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }

    i += 6;
  }

  return true;
}

let i = 0;
const nth = 10001;
let n = 0;
while (true) {
  if (is_prime(n)) {
    i += 1;
  }

  if (i === nth) {
    console.log(n);
    break;
  }

  n += 1;
}
