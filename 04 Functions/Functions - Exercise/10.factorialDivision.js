function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

function divideFactorials(num1, num2) {
    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    let division = (factorial1 / factorial2).toFixed(2);
    return division;
}

// Test cases
console.log(divideFactorials(5, 2)); // Output: 60.00
console.log(divideFactorials(6, 2)); // Output: 360.00