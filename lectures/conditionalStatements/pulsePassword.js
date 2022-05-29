function pulsePassword(input) {
    let correct = (input[0]);
    if (correct == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}
pulsePassword(["s3cr3t!P@asd"]);