const data = new Date("2025-07-29 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto =getDiaSemanaTexto(diaSemana);






function  getDiaSemanaTexto(diaSemana) {

let diaSemanaTexto;


switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
   break

  case 1:
    diaSemanaTexto = "Segunda-feira";
    break

  case 2:
    diaSemanaTexto = "Terça-feira";
   break

  case 3:
    diaSemanaTexto = "Quarta-feira";
   break

  case 4:
    diaSemanaTexto = "Quinta-feira";
   break

  case 5:
    diaSemanaTexto = "Sexta-feira";
   break

  case 6:
    diaSemanaTexto = "Sábado";
   break
  default:
    diaSemanaTexto = "";
   break
}
 return diaSemanaTexto;
}

console.log(diaSemana,diaSemanaTexto);
