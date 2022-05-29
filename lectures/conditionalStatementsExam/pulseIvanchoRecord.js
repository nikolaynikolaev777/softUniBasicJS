function pulseIvanchoRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecondForMeter = Number(input[2]);

    let ivanchoMeter = distance * timeInSecondForMeter;
    let slowly = Math.floor(distance / 15);
    let time = slowly * 12.5;
    let ivanchoTime = ivanchoMeter + time;
    let finish = ivanchoTime - record;

    if (ivanchoTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`)
    } else if (ivanchoTime >= record) {
        console.log(`No, he failed! He was ${finish.toFixed(2)} seconds slower`)
    }

}
pulseIvanchoRecord(["55555.67",
    "3017",
    "5.03"]);