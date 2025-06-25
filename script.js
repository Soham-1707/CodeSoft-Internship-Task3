const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach(button => {
  const value = button.getAttribute('data-value');

  button.addEventListener('click', () => {
    if (button.id === 'equals') {
      try {
        display.value = eval(input);
        input = display.value;
      } catch {
        display.value = 'Error';
        input = '';
      }
    } else if (button.id === 'clear') {
      input = '';
      display.value = '';
    } else if (button.id === 'on') {
      input = '';
      display.value = '';
    } else if (button.id === 'off') {
      display.value = '';
      input = '';
    } else if (value && !['MU','MC','MR','M+','M-','GT','EX'].includes(value)) {
      input += value;
      display.value = input;
    }
  });
});
