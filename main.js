const sum = (firstNumber, secondNumber) => {
    const output = (firstNumber + secondNumber);
    return output;
}

const sub = (firstNumber, secondNumber) => {
    const output = (firstNumber - secondNumber);
    return output;
}

const mul = (firstNumber, secondNumber) => {
    const output = (firstNumber * secondNumber);
    return output;
}

const div = (firstNumber, secondNumber) => {
    const output = (firstNumber / secondNumber);
    return output;
}

const main = () => {
    let number1 = prompt("Enter number 1 : ")
    const n1 = parseInt(number1);

    if (isNaN(n1)) {
        alert(`Not a valid input  ${number1}`)
        return;
    }

    let number2 = prompt("Enter number 2 : ")
    const n2 = parseInt(number2);

    if (isNaN(n2)) {
        alert(`Not a valid input ${number2}`)
        return;
    }

    let operator = prompt("Operation to perform: [ + , - , * , / ]");

    let output = null;

    if (operator == "+") {
        output = sum(n1, n2);
    } else if (operator == "-") {
        output = sub(n1, n2);
    } else if (operator == "*") {
        output = mul(n1, n2);
    } else if (operator == "/") {
        output = div(n1, n2);
    } else {
        alert("No operation perfomed at this moment for the operation : ", operator);
        return;
    }

    const outputString = ` ${n1} ${operator} ${n2} = ${output} `
    document.write(outputString)
}
main();



