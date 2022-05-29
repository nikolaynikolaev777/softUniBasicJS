function pulseSummerOutfit(input) {
    let degress = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (degress >= 10 && degress <= 18) {
        if (timeOfDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if (degress > 18 && degress <= 24) {
        if (timeOfDay === "Morning" || timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (timeOfDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }

    if (degress >= 25) {
        if (timeOfDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degress} degrees, get your ${outfit} and ${shoes}.`);
}
pulseSummerOutfit(["28", "Evening"]);