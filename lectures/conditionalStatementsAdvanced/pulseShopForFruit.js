function pulseShopForFruit(input) {
    let fruit = input[0];
    let weekend = input[1];
    let price = Number(input[2]);

    if (weekend === "Monday" | weekend === "Tuesday" | weekend === "Wednesday" | weekend === "Thursday" | weekend === "Friday") {
        switch (fruit) {
            case "banana": console.log((2.50 * price).toFixed(2)); break;
            case "apple": console.log((1.20 * price).toFixed(2)); break;
            case "orange": console.log((0.85 * price).toFixed(2)); break;
            case "grapefruit": console.log((1.45 * price).toFixed(2)); break;
            case "kiwi": console.log((2.70 * price).toFixed(2)); break;
            case "pineapple": console.log((5.50 * price).toFixed(2)); break;
            case "grapes": console.log((3.85 * price).toFixed(2)); break;

            default: console.log("error"); break;
        }
    } else if (weekend === "Saturday" | weekend === "Sunday") {
        switch (fruit) {
            case "banana": console.log((2.70 * price).toFixed(2)); break;
            case "apple": console.log((1.25 * price).toFixed(2)); break;
            case "orange": console.log((0.90 * price).toFixed(2)); break;
            case "grapefruit": console.log((1.60 * price).toFixed(2)); break;
            case "kiwi": console.log((3.00 * price).toFixed(2)); break;
            case "pineapple": console.log((5.60 * price).toFixed(2)); break;
            case "grapes": console.log((4.20 * price).toFixed(2)); break;

            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}
pulseShopForFruit(["banana", "Workday", "2"])