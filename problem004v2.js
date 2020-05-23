const s = Date.now()
const palindrome = []

for (i = 100 ; i < 1000; i++) {
    for (j = 100; j < 1000; j++) {
        let result = i * j
        let reversed = result.toString().split('').reverse().join('')

        if (result == reversed) {
            palindrome.push(result)
        }
    }
}

console.log(Math.max(...palindrome))
console.log('time: ' + (Date.now() - s))