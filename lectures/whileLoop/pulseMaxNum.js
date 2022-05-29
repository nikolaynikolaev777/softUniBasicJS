function pulseMaxNum(input) {
    let num = input[0];
    let currNum = 0;
    let theHighestNum = Number(0);
    let i = 0;
    while (i < input.length) {
        currNum = input[i];
        i++;
        currNum = Number(currNum);
        if (theHighestNum <= currNum || theHighestNum === 0) {
            theHighestNum = currNum;
        }
        if (input[i] === "Stop") {
            break;
        }
    }
    console.log(theHighestNum);
}
pulseMaxNum(["100",
"99",
"80",
"70",
"Stop"])