function pulseSalary(input) {
    let numTabs = Number(input[0]);
    let salary = Number(input[1]);
    let inputL = input.length;

    for (let i = 2; i <= inputL; i++) {
        let nameTabs = input[i];
        if (nameTabs === "Facebook") {
            salary -= 150;
        } else if (nameTabs === "Instagram") {
            salary -= 100;
        } else if (nameTabs === "Reddit") {
            salary -= 50;
        } else if (salary <= 0) {
            break;
        }
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}
pulseSalary(["10",
    "100",
    "Facebook"]);