function pulseGraduation(input) {
    let name = input[0];
    let i = 1;
    let avgGrade = 0;
    let yearGrade = 0;
    let inputL = input.length - 1;


    while (i <= inputL) {
        yearGrade = input[i]
        avgGrade += Number(yearGrade);

        if (yearGrade < 4) {
            console.log(`${name} has been excluded at ${i} grade`);
            break;
        }

        i++;
    }

    if (i >= inputL) {
        avgGrade /= inputL;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
pulseGraduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])