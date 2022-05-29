function pulseSumSec(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minute = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if(seconds < 10) {
        console.log(`${minute}:0${seconds}`);
    } else {
        console.log(`${minute}:${seconds}`);
    }
}
pulseSumSec(["35", "45", "44"]);