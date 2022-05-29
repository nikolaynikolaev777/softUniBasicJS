function projectCreation(input) {
    let architectName = (input[0]);
    let needHours = 3;
    let projectX = Number(input[1]);
    let projectY = projectX * needHours;
    console.log(`The architect ${architectName} will need ${projectY} hours to complete ${projectX} project/s.`)
}
projectCreation(["Georgi", "4"]);