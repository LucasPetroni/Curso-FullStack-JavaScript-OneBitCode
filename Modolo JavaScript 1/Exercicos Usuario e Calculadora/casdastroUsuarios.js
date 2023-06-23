let nome = window.prompt("Qual seu nome?");

let sobrenome = window.prompt("Qual seu sobrenome?");

let campo = window.prompt("Qual o compus que vc estuda?");

let dataNascimento = window.prompt("Qual ano vc nasceu?");

parseFloat(dataNascimento);

let idade = 2023 - dataNascimento;

alert(
  "Voce é o " +
    nome +
    " " +
    sobrenome +
    " que estuda no campus " +
    campo +
    ", e tem " +
    idade +
    " anos."
);
