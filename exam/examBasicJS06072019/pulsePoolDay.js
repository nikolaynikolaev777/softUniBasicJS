function pulsePoolDay(input) {
    let people = Number(input[0]);
    let tax = Number(input[1]);
    let deckChar = Number(input[2]);
    let priceOneUmrl = Number(input[3]);

    let taxEnter = people * tax;
    let wantChair = Math.ceil(people * 0.75);
    let wantChairF = wantChair * deckChar;
    let wantUmbrela = Math.ceil(people * 0.50);
    let wantUmbrelaF = wantUmbrela * priceOneUmrl;

    let finish = taxEnter + wantChairF + wantUmbrelaF;
    console.log(finish.toFixed(2) + " lv.");
}
pulsePoolDay(["100", "8", "6", "4"]);