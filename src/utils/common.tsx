export const generateQuestions = (count = 10, level = 'Easy') => {
  const operations = ['+', '-', '*', '/'];
  const maxValues = {
    Easy: 10,
    Medium: 50,
    Hard: 100,
  };
  const max = maxValues[level];
  const questions = [];

  for (let i = 0; i < count; i++) {
    const num1 = Math.floor(Math.random() * max);
    const num2 = Math.floor(Math.random() * (max / 2)) + 1; 
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let answer;


    switch (operation) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = parseFloat((num1 / num2).toFixed(2));
        break;
      default:
        answer = 0;
    }


    const incorrectOptions = new Set();
    while (incorrectOptions.size < 3) {
      let randomOption = parseFloat(
        (answer + Math.random() * 10 - 5).toFixed(2) 
      );
      if (randomOption !== answer && randomOption >= 0) {
        incorrectOptions.add(randomOption);
      }
    }


    const options = [...incorrectOptions, answer].sort(() => Math.random() - 0.5);

    questions.push({ question: `${num1} ${operation} ${num2}`, answer, options });
  }

  return questions;
};
