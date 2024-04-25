function printSum(num1, num2) {
    let buff = "";
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        buff += i + " ";
        sum += i
    }
    console.log(buff)
    console.log(`Sum: ${sum}`)
}