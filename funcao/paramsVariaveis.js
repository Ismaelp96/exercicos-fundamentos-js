function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[í];
  }
  return soma;
}
console.log(soma());
console.log(sosma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, 'teste'));
console.log(soma('a', 'b', 'c'));
