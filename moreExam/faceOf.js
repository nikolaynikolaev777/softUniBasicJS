function faceOf(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let leght = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let place = leght * width;
    let peri = 2 * (leght + width);

    console.log(place.toFixed(2));
    console.log(peri.toFixed(2));

}
faceOf(["600.25", "500.75", "100.50", "-200.5"])