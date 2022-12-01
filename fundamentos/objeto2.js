console.log(typeof Object);
console.log(typeof new Object());

const Cliente = () => {
  console.log(typeof Cliente);
  console.log(typeof new Cliente());
};

class Produto {} // es 2015 (eS6)
console.log(typeof Produto);
console.log(typeof new Produto());
