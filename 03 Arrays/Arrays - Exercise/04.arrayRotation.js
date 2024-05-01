function rotation(arr, rotations) {
    let rotationsExcecuted = 0;
    let lastItem = ``;

    while (rotations > rotationsExcecuted) {
        let newArr = [];
        lastItem = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i + 1])
        }
        newArr.push(lastItem)
        rotationsExcecuted++;
        arr = newArr;
    }

    console.log(arr.join(` `));

}