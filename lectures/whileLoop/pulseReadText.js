function pulseReadText(input) {
    let index = 0;
    let str = input[index];

    while (str !== "Stop") {
        console.log(str);
        index++;
        str = input[index];
    }
}
pulseReadText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])