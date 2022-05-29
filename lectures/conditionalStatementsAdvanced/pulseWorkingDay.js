function pulseWorkingDay(input) {
    let workDay = input[0];

    switch (workDay) {
        case "Monday":
            console.log("Working day");
            break;
        case "Tuesday":
            console.log("Working day");
            break;
        case "Wednesday":
            console.log("Working day");
            break;
        case "Thursday":
            console.log("Working day");
            break;
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
pulseDayWeek(["dsa4"]);