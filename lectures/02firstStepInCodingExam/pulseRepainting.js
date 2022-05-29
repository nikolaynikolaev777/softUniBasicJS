function repainting(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]) * 14.50;
    let paintThin = Number(input[2]) * 5.00;
    let hourWork = Number(input[3]);

    let sumNylon = nylon * 1.50;
    let sumPaint = paint + (paint * 0.10);
    let bags = 0.40;
    let sumItm = sumNylon + sumPaint + paintThin + bags;
    let sumWorkers = (sumItm * 0.30) * hourWork;
    let finish = sumItm + sumWorkers;

    console.log(finish);

}
repainting(["10", "11", "4", "8"]);