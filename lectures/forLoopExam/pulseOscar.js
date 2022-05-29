function pulseOscar(input) {
    let actiorName = input[0];
    let academicPoint = Number(input[1]);

    for (let i = 3; i < input.length; i++) {

        if (i % 2 !== 0) {
            let point = i + 1;
            let sum = input[i].length * Number(input[point]) / 2;
            academicPoint += sum;
        }
        if (academicPoint > 1250.5) {
            break;
        }
    }

    if (academicPoint > 1250.5) {
        console.log(`Congratulations, ${actiorName} got a nominee for leading role with ${academicPoint.toFixed(1)}!`);
    } else if (academicPoint < 1250.5) {
        console.log(`Sorry, ${actiorName} you need ${(1250.5 - academicPoint).toFixed(1)} more!`)
    }
}
pulseOscar(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);