// listas
const cidades = new Array(`São Paulo`, `Rio De Janeiro`, `Salvador`, `Porto Alegre`, `Belo Horizonte`);


cidades.push(`Curitiba`);

// cidades.splice(3, 1);

let contador = 0;
console.log('-------Laço while--------')
while (contador < cidades.length) {
    console.log(cidades[contador]);
    contador++;
}
console.log('\n-------Laço for--------');

for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}