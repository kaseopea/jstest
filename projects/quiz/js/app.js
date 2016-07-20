var questions = [
  new Question('Who was the first president of US?', ['Washington', 'Jefferson'], 'Washington'),
  new Question('What is the answer to the Ultimate Question of life, the Universe, and Everything?', ['PI', '42'], '42')
];

var quiz = new Quiz(questions);

QuizUI.displayNext();
