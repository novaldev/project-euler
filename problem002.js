const fibonacci = (n) => {
    let n1 = 1;
    let n2 = 2;
    let sumEven = 0;

    while (n2 < n) {
        if (n2 % 2 === 0) {
            sumEven += n2
        }

        [n1, n2] = [n2, n1 + n2]
    }

    return sumEven
}

console.log(fibonacci(4000000))