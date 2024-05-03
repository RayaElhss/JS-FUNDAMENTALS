function listOfProducts(input) {
    input.sort().forEach((element, i) => { console.log(`${i + 1}.${element}`) });
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])