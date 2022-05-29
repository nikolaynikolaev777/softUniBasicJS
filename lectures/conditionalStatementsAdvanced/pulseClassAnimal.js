function pulseClassAnimal(input) {
    let animalsClass = input[0];

    switch (animalsClass) {
        case "dog":
            console.log("mammal");
            break;
        case "snake":
            console.log("reptile");
            break;
        case "tortoise":
            console.log("reptile");
            break;
        case "crocodile":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
pulseClassAnimal(["fds"])