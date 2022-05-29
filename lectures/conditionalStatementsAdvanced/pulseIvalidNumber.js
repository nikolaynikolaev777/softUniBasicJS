function pulseIvalidNumber(input) {
    let num = Number(input[0]);

    if (num === 0) {
        console.log("");
    } else if (num < 100) {
        console.log("invalid");
    } else if (num > 200) {
        console.log("invalid");
    }
}
pulseIvalidNumber(["220"])