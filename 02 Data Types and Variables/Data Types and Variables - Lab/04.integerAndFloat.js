function integerAndFloat(num1, num2, num3) {
    let integerOrFloat = "";

    let sum = num1 + num2 + num3;
    if (sum % 1 === 0) {
        integerOrFloat += 'Integer';
    } else {
        integerOrFloat += 'Float'
    }

    console.log(`${sum} - ${integerOrFloat}`)
}