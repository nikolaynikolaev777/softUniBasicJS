function pulseTriangeleArea(input) {
    let side = Number(input[0]);
    let height = Number(input[1]);

    let sum = side * height / 2;
    console.log(sum.toFixed(2));
}
pulseTriangeleArea(["15", "35"]);