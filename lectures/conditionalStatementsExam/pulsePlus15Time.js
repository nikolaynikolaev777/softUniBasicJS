function pulseTime(input) {
    let hour = Number(input[0]);
    let minutePlus = Number(input[1]) + 15;
    let minute = minutePlus % 60;

    if (minute < 10) {
        minute = ("0" + minute);
    } if (minutePlus >= 60) {
        hour += 1;
    }
    if (hour >= 24) {
        hour = 0;
    }
    console.log(`${hour}:${minute}`);
}
pulseTime(["12", "49"]);