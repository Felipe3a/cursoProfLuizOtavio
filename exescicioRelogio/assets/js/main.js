  document.addEventListener("DOMContentLoaded", () => {
    const data = new Date();
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const dia = data.getDate();
    const ano = data.getFullYear();
    const numeroMes = data.getMonth() + 1;
    const mes = getMes(numeroMes);
    const texto = document.getElementById("texto");
    texto.innerHTML = `${diaSemanaTexto}, ${dia} de ${mes} de ${ano}, ${hora}:${minutos}:${segundos}h.`;
  });

  function getMes(mes) {
    let nomeMes;

    switch (mes) {
      case 1:
        nomeMes = "Janeiro";
        break;

      case 2:
        nomeMes = "Fevereiro";
        break;

      case 3:
        nomeMes = "Março";
        break;

      case 4:
        nomeMes = "Abril";
        break;

      case 5:
        nomeMes = "Maio";
        break;

      case 6:
        nomeMes = "Junho";
        break;

      case 7:
        nomeMes = "Julho";
        break;
      case 8:
        nomeMes = "Agosto";
        break;

      case 9:
        nomeMes = "Setembro";
        break;
      case 10:
        nomeMes = "Outubro";
        break;

      case 11:
        nomeMes = "Novembro";
        break;

      case 12:
        nomeMes = "Dezembro";
        break;

      default:
        nomeMes = "Mês inválido";
        break;
    }
    return nomeMes;
  }

  function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        diaSemanaTexto = "Domingo";
        break;

      case 1:
        diaSemanaTexto = "Segunda-feira";
        break;

      case 2:
        diaSemanaTexto = "Terça-feira";
        break;

      case 3:
        diaSemanaTexto = "Quarta-feira";
        break;
      case 4:
        diaSemanaTexto = "Quinta-feira";
        break;

      case 5:
        diaSemanaTexto = "Sexta-feira";
        break;

      case 6:
        diaSemanaTexto = "Sábado";
        break;

      default:
        diaSemanaTexto = "";
        break;
    }
    return diaSemanaTexto;
  }


//________________________________________________________________________________________________________
//Intl.DateTimeFormat


    document.addEventListener("DOMContentLoaded", () => {
      const data = new Date();

      const opcoes = {
        weekday: 'long',   // dia da semana por extenso
        year: 'numeric',
        month: 'long',     // mês por extenso
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };

      const dataFormatada = new Intl.DateTimeFormat('pt-BR', opcoes).format(data);

      const texto2 = document.getElementById("texto2");
      texto2.innerHTML = `${dataFormatada}h`;
    });





    //________________________________________________________________________________________________________

    //toLocaleDateString

const data = new Date();
const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit' };
const textoFormatado = data.toLocaleDateString('pt-BR', opcoes);
console.log(textoFormatado);
const texto3 = document.getElementById("texto3");
texto3.innerHTML = `${textoFormatado}h`;


