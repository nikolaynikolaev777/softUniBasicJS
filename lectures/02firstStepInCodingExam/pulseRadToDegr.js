function radToDegr(input) {
    let radian = (input[0]);
    let degrees = radian * 180 / Math.PI;
    console.log(degrees);
}

test(["3.1416"]);