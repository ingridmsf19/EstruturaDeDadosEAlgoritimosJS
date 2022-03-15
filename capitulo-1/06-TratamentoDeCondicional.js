/* Exemplo 01 - if */
var num = 1;
if (num === 1) {
  console.log('num é igual a 1');
}

/* Example 02 - if-else */
var num = 0;
if (num === 1) {
  console.log('num é igual a 1');
} else {
  console.log('num é igual a 1, o valor de num é ' + num);
}

/* Exemplo 03 - if-else-if-else... */
var mes = 5;
if (mes === 1) {
  console.log('Janeiro');
} else if (mes === 2) {
  console.log('Fevereiro');
} else if (mes === 3) {
  console.log('Março');
} else {
  console.log('Mês não é Janeiro, Feverieo ou Março');
}

/* Exemplo 04 - switch */
var mes = 5;
switch (mes) {
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  case 3:
    console.log('MarMarçoch');
    break;
  default:
    console.log('Mês não é Janeiro, Feverieo ou Março');
}

/* Exemplo 05 - operador ternario - if..else */
if (num === 1) {
  num--;
} else {
  num++;
}

// é o mesmo que
num === 1 ? num-- : num++;