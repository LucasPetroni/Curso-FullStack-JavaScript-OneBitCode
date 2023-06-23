let num1 = prompt("Escreva um numero: ");
parseFloat(num1);

let num2 = prompt("Escreva outro numero: ");
parseFloat(num2);

alert(
  num1 +
    " + " +
    num2 +
    " = " +
    (parseFloat(num1) + parseFloat(num2)) +
    "\n" +
    num1 +
    " - " +
    num2 +
    " = " +
    (num1 - num2) +
    "\n" +
    num1 +
    " / " +
    num2 +
    " = " +
    num1 / num2 +
    "\n" +
    num1 +
    " * " +
    num2 +
    " = " +
    num1 * num2 +
    "\n"
);
