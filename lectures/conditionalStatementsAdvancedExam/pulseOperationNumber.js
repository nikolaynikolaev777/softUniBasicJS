function pulseOperationNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sing = input[2];
    let sum = 0;
    let evenOdd = 0;

    if (sing === "+" || sing === "-" || sing === "*") {
        if (sing === "+") {
            sum = num1 + num2;
        } else if (sing === "-") {
            sum = num1 - num2;
        } else if (sing === "*") {
            sum = num1 * num2;
        }
        if (sum % 2 === 0) {
            evenOdd = "even"
        } else {
            evenOdd = "odd"
        }
        console.log(`${num1} ${sing} ${num2} = ${sum} - ${evenOdd}`);
    }

    if (sing === "/" || sing === "%") {
        if (num1 == "0" || num2 == "0") {
            console.log(`Cannot divide ${num1} by zero`);
        } else if (sing === "/") {
            sum = num1 / num2;
            console.log(`${num1} ${sing} ${num2} = ${sum.toFixed(2)}`);
        } else if (sing === "%") {
            sum = num1 % num2;
            console.log(`${num1} ${sing} ${num2} = ${sum}`);
        }
    }
}
pulseOperationNumber(["112", "0", "/"]);