function houseParty(arr) {
    let emptyList = []
    for (let i = 0; i < arr.length; i++) {
        let party = arr[i].split(" is ")
        let name = party[0]
        let command = party[1]
        if (command === "going!") {
            if (emptyList.indexOf(name) === -1) {
                emptyList.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }

        } else if (command === "not going!") {
            if (emptyList.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`)
            } else {
                emptyList.splice(emptyList.indexOf(name), 1)
            }
        }

    }
    console.log(emptyList.join("\n"))
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)