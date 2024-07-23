document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = Array.from(document.querySelectorAll('button'));

    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                const value = e.target.innerText;

                if (value === '=') {
                    if (operator && operand1 !== '') {
                        operand2 = currentInput;
                        currentInput = operate(operand1, operand2, operator);
                        display.value = currentInput;
                        operand1 = '';
                        operator = '';
                    }
                } else if (['+', '-', '*', '/'].includes(value)) {
                    if (operator && operand1 !== '') {
                        operand2 = currentInput;
                        operand1 = operate(operand1, operand2, operator);
                        display.value = operand1;
                        currentInput = '';
                    }
                    operator = value;
                    operand1 = currentInput;
                    currentInput = '';
                } else {
                    currentInput += value;
                    display.value = currentInput;
                }
            }
        });
    });

    function operate(operand1, operand2, operator) {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
        }
    }
});
