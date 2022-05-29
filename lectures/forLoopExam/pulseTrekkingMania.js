function pulseTrekkingMania(input) {
    let groupCount = Number(input[0]);
    let sum = 0;
    let num = 0;
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;

    for (let i = 1; i <= groupCount; i++) {
        num = Number(input[i]);
        sum += num;

        if (num <= 5) {
            p1 += num;
        } else if (num >= 6 && num <= 12) {
            p2 += num;
        } else if (num >= 13 && num <= 25) {
            p3 += num;
        } else if (num >= 26 && num <= 40) {
            p4 += num;
        } else if (num >= 41) {
            p5 += num;
        }
    }
    console.log(`${(p1 / sum * 100).toFixed(2)}%`);
    console.log(`${(p2 / sum * 100).toFixed(2)}%`);
    console.log(`${(p3 / sum * 100).toFixed(2)}%`);
    console.log(`${(p4 / sum * 100).toFixed(2)}%`);
    console.log(`${(p5 / sum * 100).toFixed(2)}%`);
}
pulseTrekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])