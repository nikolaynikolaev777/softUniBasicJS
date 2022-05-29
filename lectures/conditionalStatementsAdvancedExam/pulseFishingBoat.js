function pulseFishingBoat(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let numFishman = Number(input[2]);
    let shipsPrice = 0;

        switch (season) {
            case "Spring": shipsPrice = 3000; break;
            case "Summer": 
            case "Autumn": shipsPrice = 4200; break;
            case "Winter": shipsPrice = 2600; break;
        
            default:break;
        }

        if(numFishman <= 6) {
            shipsPrice = shipsPrice * 0.90;
        } else if(numFishman >= 7 && numFishman <= 11) {
            shipsPrice = shipsPrice * 0.85;
        } else if(numFishman >= 12) {
            shipsPrice = shipsPrice * 0.75;
        }
        
        if(numFishman % 2 === 0 && season != "Autumn") {
            shipsPrice = shipsPrice * 0.95;
        }

        if(groupBudget >= shipsPrice) {
            console.log(`Yes! You have ${(groupBudget - shipsPrice).toFixed(2)} leva left.`)
        } else if(groupBudget < shipsPrice) {
            console.log(`Not enough money! You need ${(shipsPrice - groupBudget).toFixed(2)} leva.`)
        }
}
pulseFishingBoat(["2000", "Winter", "13"]);