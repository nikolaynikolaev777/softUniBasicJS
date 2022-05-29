function pulseTradeCommissions(input) {
    let city = input[0];
    let sold = Number(input[1]);

    if (city === "Sofia" | city === "Varna" | city === "Plovdiv") {
        if (sold === 0, sold < 0) {
            console.log("error");
        } else if (sold <= 500) {
            switch (city) {
                case "Sofia": console.log(((sold / 100) * 5).toFixed(2)); break;
                case "Varna": console.log(((sold / 100) * 4.5).toFixed(2)); break;
                case "Plovdiv": console.log(((sold / 100) * 5.5).toFixed(2)); break;

                default: console.log("error"); break;
            }
        } else if (sold > 500, sold <= 1000) {
            switch (city) {
                case "Sofia": console.log(((sold / 100) * 7).toFixed(2)); break;
                case "Varna": console.log(((sold / 100) * 7.5).toFixed(2)); break;
                case "Plovdiv": console.log(((sold / 100) * 8).toFixed(2)); break;

                default: console.log("error"); break;
            }
        } else if (sold > 1000, sold <= 10000) {
            switch (city) {
                case "Sofia": console.log(((sold / 100) * 8).toFixed(2)); break;
                case "Varna": console.log(((sold / 100) * 10).toFixed(2)); break;
                case "Plovdiv": console.log(((sold / 100) * 12).toFixed(2)); break;

                default: console.log("error"); break;
            }
        } else if (sold > 10000) {
            switch (city) {
                case "Sofia": console.log(((sold / 100) * 12).toFixed(2)); break;
                case "Varna": console.log(((sold / 100) * 13).toFixed(2)); break;
                case "Plovdiv": console.log(((sold / 100) * 14.50).toFixed(2)); break;

                default: console.log("error"); break;
            }
        }
    } else {
        console.log("error");
    }
}
pulseTradeCommissions(["Sofia", "50111"])