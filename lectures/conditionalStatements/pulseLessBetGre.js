function pulseLessBetGre(input) {
    let num = Number(input[0]);
    if(num <= 99) {
        console.log("Less than 100");
    }
    if(num >= 100 == num <= 200) {
        console.log("Between 100 and 200");
    }
     if(num >= 201) {
        console.log("Greater than 200");
    }
}
pulseLessBetGre(["201"]);