function sum()
{
    let number1 = parseInt(window.prompt("enter Number 1"));
    let number2 = parseInt(window.prompt("enter Number 2"));
    let number3 = parseInt(window.prompt("enter Number 3"));

    let sum = (number1+number2+number3)/3;
    window.alert(sum);
}

sum();