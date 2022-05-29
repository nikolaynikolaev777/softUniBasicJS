function yardGreening(input) {
    let squareMeterPrice = 7.61;
    let reqMeter = Number(input[0]);
    let result = reqMeter * squareMeterPrice;
    
    let disc = result * 0.18;
    let final = result - disc;
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${disc} lv.`);
    }
    yardGreening(["550"]);