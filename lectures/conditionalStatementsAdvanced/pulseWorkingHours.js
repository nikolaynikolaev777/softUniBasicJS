function pulseWorkingHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (time < 10) {
        console.log("closed");
    } else if (time > 18) {
        console.log("closed");
    } else if (day === "Sunday") {
        console.log("closed");
    } else if (time >= 10, time <= 18) {
        switch (day) {
            case "Monday": console.log("open"); break;
            case "Tuesday": console.log("open"); break;
            case "Wednesday": console.log("open"); break;
            case "Thursday": console.log("open"); break;
            case "Friday": console.log("open"); break;
            case "Saturday": console.log("open"); break;

            default: console.log("closed"); break;
        }
    }
}
pulseWorkingHours(["15", "Sunday"])