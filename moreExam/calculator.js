function calculator(input) {
    let x = Number(input[0]);       //First num from user
    let sing = input[1];            //string for sing + = * /
    let y = Number(input[2]);       //second number from user
    let result = 0;

    if(sing === "+") {
        result = x + y;
    } else if(sing === "-") {
        result = x - y;
    } else if(sing === "*") {
        result = x * y;
    } else if(sing === "/") {
        result = x / y;
    }
    console.log(`Your result is: ${result}`);
}
calculator(["5", "+", "6"]);