function sequences(input) {
    input = input.map(el => JSON.parse(el))
    input.forEach(element => element.sort((a, b) => b - a));
    let uniqueArr = []
    for (let i = 0; i < input.length; i++) {
        let isUnique = true
        for (let k = 0; k < uniqueArr.length; k++) {
            if (uniqueArr[k].toString() === input[i].toString()) {
                isUnique = false

            }
        }
        if (isUnique) uniqueArr.push(input[i])
    }
    uniqueArr.sort((a, b) => a.length - b.length).forEach(el =>
        console.log(`[${(el).join(", ")}]`))
}
sequences(
["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);