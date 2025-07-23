const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = '';


texto.innerHTML += `<p>a ráiz quadrada de  ${numero} ´e <strong>${numero **0.5 }</strong>.</p>`
texto.innerHTML += `<p>Nùmero inteiro é <strong>${Number.isInteger(numero)}</strong>.</p>`
texto.innerHTML += `<p>É Nan<strong> ${Number.isNaN(numero)}</strong>.</p>`
texto.innerHTML += `<p>Seu número aredondado para baixo é  <strong>${Math.floor(numero)}</strong>.</p>`
texto.innerHTML += `<p>Seu número aredondado para cima é  <strong>${Math.ceil(numero)}</strong>.</p>`
texto.innerHTML += `<p>Seu número com duas casas decimais <strong>${numero.toFixed(2)}</strong>.</p>`


