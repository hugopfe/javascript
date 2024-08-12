function calcFactorial(num) {
    let total = num
    
    for (let i = num-1; i > 1; i--) {
        total *= i
    }
    
    console.log(`→ ${total}`)
}

console.log(calcFactorial(6))