function pulseShopping(input) {
    let peterMoney = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ramMemory = Number(input[3]);
    let disc = 0.15;
    let videoCardN = videoCard * 250;
    let processorPrice = (videoCardN * 0.35) * processor;
    let ramMemoryN = (videoCardN * 0.10) * ramMemory;
    let finalPrice = videoCardN + processorPrice + ramMemoryN;
    if (videoCard > processor) {
        finalPrice = finalPrice - (finalPrice * disc);
    }
    if (finalPrice < 0) {
        finalPrice *= -1;
    }
    if (peterMoney >= finalPrice) {
        finalPrice = peterMoney - finalPrice;
        console.log(`You have ${finalPrice.toFixed(2)} leva left!`);
    } else {
        finalPrice = finalPrice - peterMoney;
        console.log(`Not enough money! You need ${finalPrice.toFixed(2)} leva more!`);
    }
}
pulseShopping(["900", "2", "1", "3"]);