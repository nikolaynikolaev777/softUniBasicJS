function pulseFigure(input) {
    let s = (input[0]);
    let r = (input[0]);
    let c = (input[0]);
    let t = (input[0]);

    if(s == "square") {
        let x = Number(input[1]);
        let xSum = x * x;
        console.log(xSum.toFixed(3));
    }
    if(r == "rectangle") {
        let x = Number(input[1]);
        let y = Number(input[2]);
        let sum = x * y;
        console.log(sum.toFixed(3));
    }
    if(c == "circle") {
        let x = Number(input[1]);
        let sum = (x * x);
        let sumX = Math.abs(sum * 3.14159);
        console.log(sumX.toFixed(3));
    }
    if(t == "triangle") {
        let x = Number(input[1]);
        let y = Number(input[2]);
        let sum = y * 0.50;
        let sumX = x * sum;
        console.log(sumX.toFixed(3));
    }
}
pulseFigure(["triangle", "4.5", "20"]);