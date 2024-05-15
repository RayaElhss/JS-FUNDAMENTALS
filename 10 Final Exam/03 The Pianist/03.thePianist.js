function thePianist(input) {
    let piecesCount = input.shift();
    let piecesObj = {};
    let pieces = input.slice(0, piecesCount);
    for (const line of pieces) {
        input
            .shift();
        const [piece, composer, key] = line.split("|");
        piecesObj[piece] = {};
        piecesObj[piece].key = key;
        piecesObj[piece].composer = composer;
    }
    let command = input.shift();
    while (command !== "Stop") {
        if (command.includes("Add")) {
            const [name, piece, composer, key] = command.split("|");
            if (piecesObj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                piecesObj[piece] = {};
                piecesObj[piece].key = key;
                piecesObj[piece].composer = composer;
            }
        } else if (command.includes("Remove")) {
            const [name, piece] = command.split("|");
            if (piecesObj.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);
                delete piecesObj[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else {
            const [name, piece, newKey] = command.split("|");
            if (piecesObj.hasOwnProperty(piece)) {
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                piecesObj[piece].key = newKey;
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = input.shift();
    }
    for (const [piece, pieceInfo] of Object.entries(piecesObj)) {
        console.log(`${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])