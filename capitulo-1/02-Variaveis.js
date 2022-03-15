

var num = 1; // {1}
num = 3; // {2}

var preco = 1.5; // {3}
var meuNome = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('meuNome: ' + meuNome);
console.log('trueValue: ' + trueValue);
console.log('preco: ' + preco);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

// ******* Escopo de Variavel

var minhaVariavel = 'global';
var minhaOutraVariavel = 'global';

function minhaFuncao() {
  var minhaVariavel = 'local';
  return minhaVariavel;
}

function minhaOutraFuncao() {
  minhaOutraVariavel = 'local';
  return minhaOutraVariavel;
}

console.log(minhaVariavel); //{1}
console.log(minhaFuncao()); //{2}

console.log(minhaOutraVariavel); //{3}
console.log(minhaOutraFuncao()); //{4}
console.log(minhaOutraVariavel); //{5}