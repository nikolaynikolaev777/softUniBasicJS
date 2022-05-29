function pulseBothPause(input) {
    let nameSerial = input[0];
    let episodeTime = Number(input[1]);
    let freeTime = Number(input[2]);
    let timeBoth = freeTime * 1/8;
    let relaxTime = freeTime * 1/4;
    
    let time = (freeTime - timeBoth) - relaxTime;

    if (time >= episodeTime) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(time - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(episodeTime - time)} more minutes.`);
    }
}
pulseBothPause(["Teen Wolf", "48", "60"])