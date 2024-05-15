function convertToObjects(jsonStr) {

    let person = JSON.parse(jsonStr);

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`)
    }
}
convertToObjects('{"name": "George", "age": 40, "town": "Sofia"}')