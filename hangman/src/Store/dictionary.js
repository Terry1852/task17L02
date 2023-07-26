let programmingLanguage = [
    "java",
    "c",
    "ruby",
    "perl",
    "python",
    "r",
    "javascript",
    "java",
    "css",
    "html",
    "php",
    "sql",
    "mysql",
    "cobol",
    "scala",
    "abap",
    "xml",
    "kotlin",
    "matlab",
    "pascal",
    "pascal",
];

function randomWord() {
    return programmingLanguage[
        //This code should select a random word from the words in the array.
        Math.floor(Math.random() * programmingLanguage.length)
    ];
}

export { randomWord }