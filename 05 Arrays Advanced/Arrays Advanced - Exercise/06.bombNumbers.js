function bombNumbers(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0, arr2[1] * 2 + 1)
            i = 0
        }
    }
    console.log(arr1.reduce((a, v) => a + v, 0))
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])