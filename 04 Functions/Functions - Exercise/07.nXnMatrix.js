function nxNMatrix(numberN) {
    const rowGeneration = () => {
        let output = '';
        for (let i = 0; i < numberN; i++) {
            output += `${numberN} `;
        }
        return output;
    }
    for (let j = 0; j < numberN; j++) {
        console.log(rowGeneration(numberN));
    }
}

nxNMatrix(7);