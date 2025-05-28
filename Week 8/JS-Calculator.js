let expression = '';
let currentValue = '';

const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      expression = '';
      currentValue = '0';
    } else if (value === '=') {
      try {
        currentValue = eval(expression.replace('x', '*')).toString();
        expression = '';
      } catch {
        currentValue = 'Error';
      }
    } else {
      expression += value === 'x' ? '*' : value;
      currentValue = value;
    }

    expressionDisplay.textContent = expression;
    resultDisplay.textContent = currentValue;
  });
});