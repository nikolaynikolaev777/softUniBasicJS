function pulseMinNum(input) {
    let num = input[0];
    let currNum = 0;
    let theLowestNum = Number(0);
    let i = 0;
    while (i < input.length) {
        currNum = input[i];
        i++;
        currNum = Number(currNum);
        if (theLowestNum >= currNum || theLowestNum === 0) {
            theLowestNum = currNum;
        }
        if (input[i] === "Stop") {
            break;
        }
    }
    console.log(theLowestNum);
}
pulseMinNum(["999",
    "Stop"])