const readline = require("readline");
const { EventEmitter } = require("stream");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
}
)

 module.exports = (questions, done) => {
  const answers = [];
  
  const [firstQuestion] = questions;

  const emitter = new EventEmitter();

 const questionAnswered = (answer) => {
  answers.push(answer.trim());
  if (answers.length < questions.length)
  {
   rl.question(
    questions[answers.length],
    questionAnswered
   );
  }
  else {
   return done(answers);
  }
 }
 rl.question(questions[0], questionAnswered)
}