function pulseOscarsCeremony(input) {
    let rentHall = Number(input[0]);

    let statuette = rentHall * 0.70;
    let ketaring = statuette * 0.85;
    let sound = ketaring / 2;

    let sum = rentHall + statuette + ketaring + sound;

    console.log(sum.toFixed(2));

}
pulseOscarsCeremony(["3500"])