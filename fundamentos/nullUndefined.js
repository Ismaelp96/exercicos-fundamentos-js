let valor; // não incializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // não pode ler o valor  nulo 'toString'

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // não atribua undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
