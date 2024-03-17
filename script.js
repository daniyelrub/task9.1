let input = document.getElementById('input');

function appendNumber(number) {
    input.value += number;
}

function appendOperator(operator) {
    if (input.value === '') return;
    let lastChar = input.value[input.value.length - 1];
    if (!isNaN(lastChar) || lastChar === '.') {
        input.value += operator;
    } else {
        alert('Only numbers are allowed!');
    }
}

function clearInput() {
    input.value = '';
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function performOperation(operation) {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Invalid expression!');
        clearInput();
    }
}

window.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '%', '^', '.'].includes(key)) {
        input.value += key;
    } else if (key === 'Enter') {
        calculate();
    } else {
        alert('Only numbers are allowed!');
    }
});

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Invalid expression!');
        clearInput();
    }
}

// Optional: Implement memory-based functionalities using local storage (M+, M-, MC)
