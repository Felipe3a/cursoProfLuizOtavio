


//Estrutura(esceleto) do laço for clássico
//i = index
for ( let i =0; i <=10 ; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
    //  O resultado será:  
// 0 par
// 1 impar
// 2 par
// 3 impar
// 4 par
// 5 impar
// 6 par
// 7 impar
// 8 par
// 9 impar
// 10 par

}               





const frutas  =['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];

for (let i =0; i <frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i])

//   o resultado se´r 
// Índice 0 maçã
// Índice 1 banana
// Índice 2 laranja
// Índice 3 uva
// Índice 4 abacaxi
}