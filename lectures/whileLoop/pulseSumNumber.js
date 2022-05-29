function pulseSumNumber(input) {
    let number = Number(input[0]);
    let i = Number(1);
    let sum = Number(0);

    while(sum <= Number(input[0])) {
        sum += Number(input[i]);
        i++;
        if(sum >= number) {
            break;
        }
    }
    console.log(sum);
}
pulseSumNumber(["20",
"1",
"2",
"3",
"4",
"5",
"6"])