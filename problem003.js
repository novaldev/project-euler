const prime = (x) => {
    i = 1;
    while (i < x) {
        if (
            (i === 2 || i === 3 || i === 5 ) 
            || (i % 2 !==  0 && i % 3 !== 0  && i % 5 !== 0)
        )  {
            if (x % i === 0) {
                x /= i
            }
        }

        i += 1
    }

    console.log(x)
}

prime(600851475143)