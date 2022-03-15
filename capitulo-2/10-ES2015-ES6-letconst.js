//* ****** EcmaScript 2015 (ES6): let and const palavras-chave

//* ****** EcmaScript 2015 (ES6): let é o novo var (https://goo.gl/he0udZ)
var framework = 'Angular';
var framework = 'React';
console.log(framework);

let linguagem = 'JavaScript!'; // {1}
// let linguagem = 'Ruby!'; // {2} - dá erro
console.log(linguagem);


//* ****** EcmaScript 2015 (ES6): const (https://goo.gl/YUQj3r)
const PI = 3.141593;
// PI = 3.0; // dá erro
console.log(PI);

const jsFramework = {
  nome: 'Angular'
};
jsFramework.nome = 'React';

// erro, não é possível atribuir outra referência ao objeto
/*
jsFramework = {
  nome: 'Vue'
};
*/