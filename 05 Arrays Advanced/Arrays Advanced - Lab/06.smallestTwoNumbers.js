function smallestTwoNumbers(numbers) {
    numbers = numbers.sort((a, b) => a - b)
    console.log(numbers.slice(0, 2).join(' '))
}
smallestTwoNumbers([30, 15, 50, 5])