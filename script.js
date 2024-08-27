function appendToCalc(value) {
    document.form1.answer.value += value;
}

function calculateResult() {
    try {
        document.form1.answer.value = eval(document.form1.answer.value);
    } catch {
        document.form1.answer.value = 'Error';
    }
}

function clearCalc() {
    document.form1.answer.value = '';
}

function calculateFibonacci() {
    let n = parseInt(document.form1.answer.value);
    if (isNaN(n) || n < 0) {
        document.form1.answer.value = 'Invalid Input';
        return;
    }
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.form1.answer.value = fib.join(', ');
}

function checkEven() {
    let num = parseInt(document.form1.answer.value);
    if (isNaN(num)) {
        document.form1.answer.value = 'Invalid Input';
        return;
    }
    document.form1.answer.value = (num % 2 === 0) ? 'Even' : 'Odd';
}

function checkPrime() {
    let num = parseInt(document.form1.answer.value);
    if (isNaN(num) || num <= 1) {
        document.form1.answer.value = 'Invalid Input';
        return;
    }
    if (num === 2) {
        document.form1.answer.value = 'Prime';
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.form1.answer.value = 'Not Prime';
            return;
        }
    }
    document.form1.answer.value = 'Prime';
}

function generateRandom() {
    let num = parseInt(document.form1.answer.value);
    if (isNaN(num) || num <= 0) {
        document.form1.answer.value = 'Invalid Input';
        return;
    }
    document.form1.answer.value = Math.floor(Math.random() * num) + 1;
}
