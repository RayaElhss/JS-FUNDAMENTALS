function sorting(input) {
    let newArr = input.slice()
    newArr.sort((a, b) => a - b)
    let result = []

    while (newArr.length !== 0) {
        result.push(newArr.pop([newArr.length - 1]))
        result.push(newArr.shift(0))
    }
    console.log(result.join(" "))

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])