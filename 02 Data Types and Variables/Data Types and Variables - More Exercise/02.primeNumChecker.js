function primeChecker(number) {

    let isPrime = true;
    if (number % 2 === 0) {
        isPrime = false;
    } else {
        isPrime = true;
    }

    console.log(isPrime)
}