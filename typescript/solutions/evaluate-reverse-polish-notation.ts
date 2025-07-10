function evalRPN(tokens: string[]): number {
    let numbers: number[] = [];
    
    for (const token of tokens) {
        if (isNaN(parseInt(token))) {
            const second: number = numbers.pop() || 0;
            const first: number = numbers.pop() || 0;

            switch (token) {
                case "+":
                    numbers.push(first + second);
                    break;

                case "-":
                    numbers.push(first - second);
                    break;

                case "*":
                    numbers.push(first * second);
                    break;

                case "/":
                    numbers.push(Math.trunc(first / second));
                    break;
            }
        }
        else {
            numbers.push(parseInt(token));
        }
    }

    return numbers.pop() || 0;
}
