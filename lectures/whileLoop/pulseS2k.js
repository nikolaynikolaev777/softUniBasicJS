function pulseS2k(input) {
    let number = Number(input[0]);
    let i = 1;
    let x = 1;

    while (x <= number) {
        console.log(x);
        x = (x * 2) + 1;
        i++;
    }
}
pulseS2k(["31"])