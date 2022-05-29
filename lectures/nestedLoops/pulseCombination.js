function pulseCombination(input) {
    let num = Number(input[0])
    let i = 0;
    let sum = 0;
    for (let n1 = 0; n1 <= num; n1++) {
        for (let n2 = 0; n2 <= num; n2++) {
            for (let n3 = 0; n3 <= num; n3++) {
                sum = n1 + n2 + n3;
                if (sum === num) {
                    i++;
                }
            }
        }
    }
    console.log(i);
}
pulseCombination(["5"])