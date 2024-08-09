function appendNumber(number) {
    const display = document.getElementById("display");
    if (number === '+/-') {
        display.value = display.value.charAt(0) === '-' 
            ? display.value.substring(1) 
            : '-' + display.value;
    } else {
        display.value += number;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch {
        display.value = "Error";
    }
}