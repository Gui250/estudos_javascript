const venda = {
  produto: "",
  quantidade: 0,
  precoUnitario: 0,
  desconto: 0,
  calcularTotal: function () {
    return this.quantidade * this.precoUnitario * (1 - this.desconto);
  },
  detalharVenda: function () {
    return `Produto: ${this.produto}, Quantidade: ${
      this.quantidade
    }, Preço Unitário: ${this.precoUnitario}, Desconto: ${
      this.desconto
    }, Total: ${this.calcularTotal()}`;
  },
  aplicarDesconto: function (percentual) {
    this.desconto = percentual / 100;
  },
  atualizarQuantidade: function (novaQuantidade) {
    this.quantidade = novaQuantidade;
  },
  verificarEstoque: function (estoque) {
    return (
      "Verificação Concluída: " +
      (this.quantidade <= estoque
        ? "Estoque Suficiente"
        : "Estoque Insuficiente")
    );
  },
};

// entradas
const entradas = Object.entries(venda);
console.log(entradas);

// Chaves
const chaves = Object.keys(venda);
console.log(chaves);

// Valores
const valores = Object.values(venda);
console.log(valores);

function verificarDesconto() {
  return "Verificação concluida: " + venda.hasOwnProperty("desconto");
}

console.log(verificarDesconto());

const novaVenda = Object.assign({}, venda, {
  produto: "Notebook",
  quantidade: 2,
});

console.log(novaVenda);

Object.defineProperty(venda, "data", {
  value: "2024-08-03",
  enumerable: false,
});

console.log(Object.keys(venda));
