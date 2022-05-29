function depositPlan(input) {
    let depositSum = Number(input[0]);
    let depositDay = Number(input[1]);
    let yearIntPer = Number(input[2]) * 0.01;
    sum = depositSum + depositDay * ((depositSum * yearIntPer) / 12);
    console.log(sum);
}

depositPlan(["2350", "6", "7"]);