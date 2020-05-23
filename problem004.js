let LIMIT = 999;
let i = 999;

while (true) {
  let result = LIMIT * i;
  let reversed = result.toString().split("").reverse().join("");

  if (result == reversed) {
    console.log(`${LIMIT} * ${i} = ${result}`);
    break;
  }

  if (LIMIT - i > 100) {
    LIMIT--;
    i = LIMIT;
  } else {
    i--;
  }
}
