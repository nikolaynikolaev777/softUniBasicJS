function pulseCinema(input) {
    let projection = input[0];
    let row = Number(input[1]);
    let colum = Number(input[2]);
    let income = 0;

    if (projection === "Premiere") {
        let income = 12;
        let finish = (row * colum) * income;
        console.log(`${finish.toFixed(2)} leva`);
    }

    if (projection === "Normal") {
        let income = 7.5;
        let finish = (row * colum) * income;
        console.log(`${finish.toFixed(2)} leva`);
    }

    if (projection === "Discount") {
        let income = 5;
        let finish = (row * colum) * income;
        console.log(`${finish.toFixed(2)} leva`);
    }
}
pulseCinema(["Discount", "12", "30"]);