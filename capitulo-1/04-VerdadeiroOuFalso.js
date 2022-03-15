function testeVerdadeiro(val) {
    return val ? console.log('verdadeiro') : console.log('falso');
  }
  
  testeVerdadeiro(true); // true
  testeVerdadeiro(false); // false
  testeVerdadeiro(new Boolean(false)); // true (objeto sempre é true)
  
  testeVerdadeiro(''); // false
  testeVerdadeiro('a'); // true
  testeVerdadeiro('Packt'); // true
  testeVerdadeiro(new String('')); // true (objeto sempre é true)
  
  testeVerdadeiro(1); // true
  testeVerdadeiro(-1); // true
  testeVerdadeiro(NaN); // false
  testeVerdadeiro(new Number(NaN)); // true (objeto sempre é true)
  
  testeVerdadeiro({}); // true (objeto sempre é true)
  
  var obj = { name: 'Joao' };
  testeVerdadeiro(obj); // true
  testeVerdadeiro(obj.name); // true
  testeVerdadeiro(obj.age); // false (propiedade é indefinido)