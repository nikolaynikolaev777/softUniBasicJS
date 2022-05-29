function pulseExamPreparation(input) {
    let noGreatGrade = Number(input[0]);
    let i = 1;
    let curent = 0;
    let poorGrades = 0;
    let avgScore = 0;
    let avgScoreL = 0;

    while (i <= input.length) {
        curent = input[i];

        if (i % 2 == 0) {
            avgScore += Number(curent);
            avgScoreL++;
        }
        if (curent <= 4) {
            poorGrades += 1;
        }

        if (curent === "Enough") {
            avgScore = avgScore / avgScoreL;
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${(i - 1) / 2}`);
            console.log(`Last problem: ${input[i - 2]}`);
            break;
        } else if (poorGrades >= noGreatGrade) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }
        i++;
    }
}
pulseExamPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])