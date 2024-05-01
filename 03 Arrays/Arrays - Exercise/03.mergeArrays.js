function solve(arr1, arr2) {
    let arr3 = arr1.map((el, i) => {
        return i % 2 === 0
            ? Number(el) + Number(arr2[i])
            : el.concat(arr2[i]); // If the index of the element is odd, add the concatenation of both elements at that index
    })
    console.log(arr3.join(' - '));
}