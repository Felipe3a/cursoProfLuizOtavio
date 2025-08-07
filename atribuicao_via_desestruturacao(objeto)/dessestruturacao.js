const pessoa = {
nome:"Felipe",
sobreNome :'Santana',
idade: 30,



endereco: { 

rua:'Adelaide Braga',
numero: 206,
cidade: 'São Paulo',
estado: 'SP'  


}
}

//atribuição via desestruturção
//const {nome, sobreNome, idade, endereco: {rua, numero, cidade, estado}} = pessoa;




//utilisando o resto
const {nome,sobreNome, ...resto} = pessoa;

console.log(nome, sobreNome, resto);