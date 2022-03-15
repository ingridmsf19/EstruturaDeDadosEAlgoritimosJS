function digaHello() {
    console.log('Hello!');
  }
  
  digaHello();
  
  /* funcao usando parâmetro */
  function saida(texto) {
    console.log(texto);
  }
  
  saida('Hello!');
  
  saida('Hello!', 'Outro texto');
  
  saida();
  
  /* funcao usando return */
  function soma(num1, num2) {
    return num1 + num2;
  }
  
  var resultado = soma(1, 2);
  saida(resultado);