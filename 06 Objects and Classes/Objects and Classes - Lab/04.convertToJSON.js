function convertToJson(firstName, lastName, hairColor) {

    person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person))
}

convertToJson('Peter', 'Smith', 'Blond')