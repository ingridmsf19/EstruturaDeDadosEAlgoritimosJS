/* Exemplo de Objeto 1 */
var obj = new Object();

/* Exemplo de Objeto 2 */
var obj = {};

obj = {
  nome: {
    primeiroNome: 'Gandalf',
    ultimoNome: 'the Grey'
  },
  endereco: 'Middle Earth'
};

/* Exemplo de Objeto 3 */
function Book(titulo, paginas, isbn) {
  this.titulo = titulo;
  this.paginas = paginas;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  };
}

var book = new Book('titulo', 'pag', 'isbn');

console.log(book.titulo); // saida do titulo do livro

book.titulo = 'novo titulo'; // alteração do valor do titulo do livro

console.log(book.titulo); // saida da alteração do valor do livro

Book.prototype.printTitle = function() {
  console.log(this.titulo);
};

book.printTitle();

book.printIsbn();