function pulseDayWeek(input) {
    let workDay = input[0];

    switch (workDay) {
        case "Monday": console.log("Working day"); break;
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error"); break;
    }
}
pulseDayWeek(["Monday"]);