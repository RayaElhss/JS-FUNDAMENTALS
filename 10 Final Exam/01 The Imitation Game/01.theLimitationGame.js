function theLimitationGame(input) {
    let message = input.shift(); // zzHe

    for (let word of input) {
        if (word === "Decode") {
            break;
        }

        let cmd = word.split("|");
        let token = cmd[0];
        switch (token) {
            case 'ChangeAll':
                let substring = cmd[1];
                let replacement = cmd[2];

                while (message.includes(substring)) {
                    message = message.replace(substring, replacement)

                }
                break;

            case 'Insert':
                let index = cmd[1]; // 2
                let value = cmd[2]; // o

                let firstPart = message.substring(0, index); // ll
                let secondPart = message.substring(index); // He
                message = firstPart + value + secondPart;
                break;

            case 'Move':
                let firstThree = message.slice(0, cmd[1]);
                let last = message.slice(cmd[1]); // 3
                message = last + firstThree;
        }
    }
    console.log(`The decrypted message is: ${message}`);


}
theLimitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])