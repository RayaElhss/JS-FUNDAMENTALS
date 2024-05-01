function processCrystals(desiredThickness, chunks) {
    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal * 0.8;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    let operations = [];
    for (let i = 0; i < chunks.length; i++) {
        console.log(`Processing chunk ${chunks[i]} microns`);
        let currentThickness = chunks[i];

        while (currentThickness > desiredThickness) {
            if (currentThickness / 4 >= desiredThickness) {
                operations.push("Cut");
                currentThickness = cut(currentThickness);
            } else if (currentThickness * 0.8 >= desiredThickness) {
                operations.push("Lap");
                currentThickness = lap(currentThickness);
            } else if (currentThickness - 20 >= desiredThickness) {
                operations.push("Grind");
                currentThickness = grind(currentThickness);
            } else if (currentThickness - 2 >= desiredThickness) {
                operations.push("Etch");
                currentThickness = etch(currentThickness);
            } else {
                operations.push("X-ray");
                currentThickness += 1;
            }
            console.log(`${operations[operations.length - 1]} x1`);
            console.log("Transporting and washing");
        }

        console.log(`Finished crystal ${desiredThickness} microns`);
    }
}