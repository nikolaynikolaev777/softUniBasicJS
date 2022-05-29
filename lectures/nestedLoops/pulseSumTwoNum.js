function pulseSumTwoNum(input) {
    let firstNum = 0;
    let secondNum = 0;
    let limitNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let i = 0;
    let sum = 0;

    for (firstNum = Number(input[0]); firstNum <= limitNum; firstNum++) {
        for (secondNum = Number(input[0]); secondNum <= limitNum; secondNum++) {
            sum = firstNum + secondNum;
            i++;
            if (sum === magicNum) {
                break;
            }
        }

        if (sum === magicNum) {
            console.log(`Combination N:${i} (${firstNum} + ${secondNum} = ${sum})`);
            break;
        } else if (firstNum >= limitNum) {
            console.log(`${i} combinations - neither equals ${magicNum}`);
        }
    }
}
pulseSumTwoNum(["88",
    "888",
    "2000"])