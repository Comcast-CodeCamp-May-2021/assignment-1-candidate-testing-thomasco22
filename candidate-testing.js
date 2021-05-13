const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questionOne = "Who was the first American woman in space?";
let questionTwo = "True or false: 5 kilometer == 5000 meters?";
let questionThree = "(5+3)/2*10=?";
let questionFour = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let questionFive = "What is the minimum crew size for the ISS?"
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
let answerOne = "Sally Ride";
let answerTwo = "true";
let answerThree = "40";
let answerFour = "Trajectory";
let answerFive = "3";
let correctAnswers = [answerOne, answerTwo, answerThree, answerFour, answerFive];
let candidateAnswers = [];
let arrowsRight = ">>>";
let arrowsLeft = "<<<";


function askForName(name) {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
// return candidateName
}

function askQuestion(answerOne) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i]);
      candidateAnswers.push(input.question("Answer here: ").toLowerCase());  
    }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let score = 0;
  let passFail = "";
  for (let i = 0; i < correctAnswers.length; i++) {
    if(candidateAnswers[i] === correctAnswers[i].toLowerCase()) {
    score++;
    grade = (score/questions.length*100);
     }
     if(grade >= 80) {
       passFail = "Pass";
  
     } else {
       passFail = "FAILED";
     }
  }

console.log(`Candidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) ${questions[1]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) ${questions[1]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) ${questions[1]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}

${arrowsRight} Overall Grade: ${grade}% (${score} of ${questions.length} responses correct) ${arrowsLeft}
${arrowsRight} Status: ${passFail} ${arrowsLeft}`);


  


  return grade;
}

function runProgram(hello) {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome", candidateName,);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};