function searchForANumber(arr, command) {

    let counter = 0
    let index = command[0]
    let specialNumber = command[2]
    let removeNumber = command[1]

    let newArr = arr.splice(0, index)
    newArr = newArr.slice(removeNumber)
    for (let el of newArr) {
        if (specialNumber === el) {
            counter++
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`)

}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)