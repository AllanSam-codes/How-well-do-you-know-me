var readlineSync = require("readline-sync");
var score = 0

// input >> processing >> output
var userName = readlineSync.question("what is your name ? ")
console.log("welcome " + userName + " ! ")


function play(question, answer) {
    // branching
    var userAnswer = readlineSync.question(question)

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("you are right")
        score = score + 1
            // console.log("current score", score)
    } else {
        console.log("you are wrong")
        score = score - 1
            // console.log("current score" , score)
    }
    console.log("current score", score)

}
console.log("          ");
var isAllanKnown = readlineSync.question("Do you know Allan?[Y/N]  ");
console.log("          ");
// array of objective
var questions = [{
        question: "Where do Allan currently live ? ",
        answer: "Trichy"
    },
    {
        question: "Is he studying in college ?[Y/N]  ",
        answer: "y"
    },
    {
        question: "Which food did he like so much ? ",
        answer: "Parotta"
    },
    {
        question: "Appu's favorite superhero is ? ",
        answer: "captain America"
    },
    {
        question: "He is a bike lover ?[Y/N]  ",
        answer: "Y"
    }
];
// for loopironman


if (isAllanKnown.toUpperCase() === "y".toUpperCase()) {
    for (var i = 0; i < questions.length; i++) {

        var currentquestion = questions[i]
        play(currentquestion.question, currentquestion.answer)
        console.log("---------");
    }
    console.log("YAY !", "your scored = ", score)
} else {
    console.log("You couldn't allowed to play this game")

}
console.log("-------------");