function pulseNumberInRange(input) {
    let num = Number(input[0]);
    let res = 0;

    if(num > 100) {
        console.log("No");
    } else if(num < -100) {
        console.log("No");
    } else if(num === 0) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}
pulseNumberInRange(["-101"])