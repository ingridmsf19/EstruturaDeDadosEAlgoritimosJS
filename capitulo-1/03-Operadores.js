

/* Operadores Aritiméticos */
var num = 0; // {1}
console.log('valor de num é ' + num);

num = num + 2;
console.log('Novo valor de é ' + num);

num = num * 3;
console.log('Novo valor de é ' + num);

num = num / 2;
console.log('Novo valor de é ' + num);

num++;
num--;

console.log('Novo valor de é ' + num);

console.log('Valor de num mod 2 é ' + num % 2);

/* Operadores de Atribuição */
num = 1;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('Novo valor de num é ' + num);

/* Operadores Comparação */
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* Operadores Lógicos */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Operadores bit a bit (bitwise) */
console.log('5 & 1:', 5 & 1); // mesmo que 0101 & 0001 (resultado 0001 / 1)
console.log('5 | 1:', 5 | 1); // mesmo que 0101 | 0001 (resultado 0101 / 5)
console.log('~ 5:', ~5); // mesmo que ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // mesmo que 0101 ^ 0001 (resultado 0100 / 4)
console.log('5 << 1:', 5 << 1); // mesmo que 0101 << 1 (resultado 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // mesmo que 0101 >> 1 (resultado 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:Joao}:', typeof { name: 'Joao' });

/* deletar */
var meuObj = { name: 'Joao', age: 21 };
delete meuObj.age;
console.log(meuObj); // Objeto {name: "Joao"}