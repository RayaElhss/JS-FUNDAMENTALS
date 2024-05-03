function jansNotation(instructions) {
    const stack = [];

    for (const instruction of instructions) {
        if (typeof instruction === 'number') {
            stack.push(instruction);
        } else if (typeof instruction === 'string' && '+-*/'.includes(instruction)) {
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;
            switch (instruction) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    if (operand2 === 0) {
                        console.log("Error: division by zero!");
                        return;
                    }
                    result = operand1 / operand2;
                    break;
            }
            stack.push(result);
        } else {
            console.log("Error: invalid instruction format!");
            return;
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log("Error: too many operands!");
    }
}
jansNotation([3, 4,'+']);