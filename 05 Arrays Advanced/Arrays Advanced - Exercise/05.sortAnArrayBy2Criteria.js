function sortAnArray2Criteria(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(input.join("\n"))
}
sortAnArray2Criteria(['alpha', 'beta', 'gamma'])