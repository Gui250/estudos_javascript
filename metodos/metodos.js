let string = 'Olá, Mundo!';

console.log(string.toUpperCase()); // letras maiusculas
console.log(string.toLowerCase()); // letras minusculas

// slice(start, end)

console.log(string.slice(0, 5)); 
console.log(string.slice(-6)); 

// substring(start, end)
console.log(string.substring(0, 5));


// replace(search, replaceWith)
console.log(string.replace('Mundo', 'JavaScript')); // Não substitui o valor inicial
console.log(string.indexOf("Mundo"));

// split(separator[, limit])
const texto = 'maçã, banana, laranja';

let frutas0 = texto.split(/\s+/);
console.log(frutas0);


// splice(indice inicial. numeroDeItensRemover, item1, item2, item3...)
frutas0.splice(1, 1);
console.log(frutas0);