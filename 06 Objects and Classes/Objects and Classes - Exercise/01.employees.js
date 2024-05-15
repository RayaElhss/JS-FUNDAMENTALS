function employee(input) {

    let obj = {};

    for (let name of input) {
        obj[name] = name.length;
    }

    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }
}

employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])