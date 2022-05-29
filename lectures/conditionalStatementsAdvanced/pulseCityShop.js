function pulseCityShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    if (city == "Sofia") {
        if (product == "coffee") { console.log(quantity * 0.50); }
        if (product == "water") { console.log(quantity * 0.80); }
        if (product == "beer") { console.log(quantity * 1.20); }
        if (product == "sweets") { console.log(quantity * 1.45); }
        if (product == "peanuts") { console.log(quantity * 1.60); }
    }
    if (city == "Plovdiv") {
        if (product == "coffee") { console.log(quantity * 0.40); }
        if (product == "water") { console.log(quantity * 0.70); }
        if (product == "beer") { console.log(quantity * 1.15); }
        if (product == "sweets") { console.log(quantity * 1.30); }
        if (product == "peanuts") { console.log(quantity * 1.50); }
    }
    if (city == "Varna") {
        if (product == "coffee") { console.log(quantity * 0.45); }
        if (product == "water") { console.log(quantity * 0.70); }
        if (product == "beer") { console.log(quantity * 1.10); }
        if (product == "sweets") { console.log(quantity * 1.35); }
        if (product == "peanuts") { console.log(quantity * 1.55); }
    }
}
pulseCityShop(["water", "Plovdiv", "2"])