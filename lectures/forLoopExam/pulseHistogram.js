function pulseHistogram(input) {
    let num = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let x = 1; x <= num; x++) {
        let curNum = Number(input[x]);

        if (curNum < 200) {
            p1++;
        } else if (curNum <= 399) {
            p2++;
        } else if (curNum <= 599) {
            p3++;
        } else if (curNum <= 799) {
            p4++;
        } else if (curNum >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
    console.log(`${(p4 / num * 100).toFixed(2)}%`);
    console.log(`${(p5 / num * 100).toFixed(2)}%`);
}
pulseHistogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])
    ;