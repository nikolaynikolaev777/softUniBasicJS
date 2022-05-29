function pulseOldBook(input) {
    let nameBook = input[0];
    let i = 1;
    let curentBook = 0;

    while (i <= input.length) {
        curentBook = input[i];

        if (nameBook === curentBook) {
            console.log(`You checked ${i - 1} books and found it.`);
            break;
        } else if (curentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${i - 1} books.`);
            break;
        }
        i++;
    }
}
pulseOldBook(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
