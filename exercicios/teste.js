let num1 =1
let num2 = 2.5
const aleatorio = Math.random()  + 5;




const usuario = prompt('Usuário: ')
const senha = prompt('Digite a sua senha:')

function login(){
if(usuario == "Felipe" && senha== '123456'){
  alert('Bem-vindo, ' + usuario + '!');
}else {
  alert('Usuário ou senha inválidos!'); }


}

login();