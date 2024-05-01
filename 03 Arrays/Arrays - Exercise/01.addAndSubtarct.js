function addAndSubtract(params) {
    let modArr = [];
    let sumOriginal = 0;
    let sumMod = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        sumOriginal += element // sum nums from original arr
        if (element % 2 === 0) {
            modArr.push(Number(params[i] + i));
        } else {
            modArr.push(Number(element - i));
        }
    }

    for (let j = 0; j < modArr.length; j++) {
        const element = modArr[j];
        sumMod += element; // sum nums from mod arr
    }

    console.log(modArr); // print the newly modified array,
    console.log(sumOriginal); // sum of numbers from the modified array
    console.log(sumMod);

}