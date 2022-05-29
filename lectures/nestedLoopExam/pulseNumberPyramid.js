function pulseNumberPyramid(input) {
    let n = Number(input[0]);

    let current = 1;
    let isBiger = false;
    let printCurentLine = "";

    for(let rows = 0;rows < n;rows++){
        for(let cols = 0;cols <= rows; cols++){
            if(current > n) {
                isBiger = true;
                break;
            }
            printCurentLine += current + " ";
            current++;
        }
        console.log(printCurentLine);
        printCurentLine = "";
        if(isBiger) {
            break;
        }

    }
}
pulseNumberPyramid(["7"]);