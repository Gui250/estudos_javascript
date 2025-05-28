const calculadora = {
  valor1: 0,
  valor2: 0,

  definirValores: function (v1, v2) {
    this.valor1 = v1;
    this.valor2 = v2;
  },

  somar: function () {
    return calculadora.valor1 + calculadora.valor2;
  },
  subtrair: function () {
    return calculadora.valor1 - calculadora.valor2;
  },
  multiplicar: function () {
    return calculadora.valor1 * calculadora.valor2;
  },
  dividir: function () {
    return calculadora.valor1 / calculadora.valor2;
  },
};

// exemplo de uso
calculadora.definirValores(10, 5);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());

calculadora.exponenciacao = function () {
  return Math.pow(calculadora.valor1, calculadora.valor2);
};

console.log(calculadora.exponenciacao());
