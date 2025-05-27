// Objeto
// let carro = { 
//     marca: 'Toyota', 
//     modelo: 'Corolla',
//     ano: 2024, 
//     cor: 'Prata', 
//     airbag: true,
//     itens: ['abs', '4 portas', 'step']
// };

// Acessar os valores das propriedades (chaves)
// console.log(carro.marca); 
// console.log(carro.modelo);
// console.log(carro.ano);
// console.log(carro.cor);
// console.log(carro.airbag);
// console.log(carro.itens);

let livro = {
    titulo: 'Aprendendo JavaScript',
    autor: 'João Silva',
    ano: 2021, 
    genero: 'Programação'
};

console.log(livro.titulo);

livro.paginas = 300; 
console.log(livro); 

livro["idioma"] = "Português";
console.log(livro);
delete livro.idioma; 