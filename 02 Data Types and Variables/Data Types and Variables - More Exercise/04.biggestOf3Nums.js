function biggestOfNums(a, b, c) {
    let num = 0;

    if (a < b && c < b) {
        num = b;
    } else if (b < a && c < a) {
        num = a;
    } else {
        num = c;
    }

    console.log(num)
}