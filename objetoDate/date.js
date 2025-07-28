function zoroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
  const dia = zoroAEsquerda(data.getDate());
  const mes = zoroAEsquerda(data.getMonth() + 1);
  const ano = zoroAEsquerda(data.getFullYear());
  const hora = zoroAEsquerda(data.getHours());
  const minutos = zoroAEsquerda(data.getMinutes());
  const segundos = zoroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data)

console.log(dataBrasil);