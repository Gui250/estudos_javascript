let produtos = ['Carrinho', 'Boneca', 'Bola']; 

produtos.push('Navio'); // adiciona no final
console.log(produtos);

produtos.unshift("Video Game"); // no inicio da lista
console.log(produtos);

produtos.pop(); // remove o ultimo elemento
console.log(produtos);

produtos.shift(); // remove o primeiro elemento
console.log(produtos);

let letras = ['d', 'g', 'a', 'h', 'b', 'f', 'c', 'e'];
let numeros = [1,6,5,4,10,8,2,19,3];

letras.sort(); 
console.log(letras); 

numeros.sort();
console.log(numeros); 

numeros.reverse(); 
console.log(numeros); 

let mesclaArray = letras.concat(numeros); 
console.log(mesclaArray);

let frutas = ['maçã', 'banana', 'laranja', 'abacaxi', 'kiwi'];
console.log(frutas.includes('banana')); // true


console.log(frutas.every(function(fruta) { 
    return fruta.includes('m');
})) // todos os elementos contem a letra m

console.log(frutas.some(function(fruta){
    return fruta.includes('k'); 
})) // algum elemento contem a letra k

console.log(frutas.join(', ')); // junta os elementos do array)