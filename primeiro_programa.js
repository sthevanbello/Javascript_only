// listas
const cidades = new Array(`São Paulo`, `Rio De Janeiro`, `Salvador`, `Porto Alegre`, `Belo Horizonte`);

// console.log(cidades);

cidades.push(`Curitiba`);

cidades.splice(3, 1);

let idade = 19;

if (idade >= 18) {

    console.log('Maior de idade');
} else {
    console.log("Menor de idade");
}

let i = 0;
while(i < cidades.length){
    console.log(cidades[i]);
    i++;
}