/*DECLARAÇÃO DE VARIÁVEIS */
let audioPlayer = document.getElementsByTagName('audio')[0];
let contador = document.getElementById("ContadorSenha")
contador.innerText = localStorage.getItem("contador") || 0

let senhaAnt = document.getElementById("SenhaAnteriorNP")
senhaAnt.innerText = localStorage.getItem("senhaAnterior") || 0

let senhaAntP = document.getElementById("SenhaAnteriorP")
senhaAntP.innerText = localStorage.getItem("senhaAnteriorP") || 0

/*FUNÇÃO PARA INCREMENTAR */
function incrementar() {
  contador.innerText = parseInt(contador.innerText) + 1
}
/*FUNÇÃO PARA DECREMENTAR */
function decrementar(){
  senhaAnt.innerText = parseInt(contador.innerText) - 1

}

/*SALVAR SENHA CHAMADA NO LOCAL STORAGE*/
function salvarSenha() {
  localStorage.setItem("contador", contador.innerText)
  localStorage.setItem("senhaAnterior", senhaAnt.innerText)
}

/*CHAMAR PROXIMA SENHA DO GRUPO NÃO ´PRIORITARIO*/
document.addEventListener('keydown', (event) => {
  let name = event.key;
  if (name === 'ArrowRight') {
    incrementar()
    decrementar()
    salvarSenha()
    audioPlayer.play();
    const msg = new SpeechSynthesisUtterance()
    msg.volume = 1
    msg.text = "ATENÇÃO! "+ document.getElementById('texto').innerHTML+" NÃO PRIORITÁRIA DE NÚMERO: "+localStorage.getItem('contador')
    speechSynthesis.speak(msg)

    var delayInMilliseconds = 100;
    var initdelayInMilliseconds = 500;

    setTimeout(function () {
      document.getElementById('texto').style.opacity = '0';
      document.getElementById("ContadorSenha").style.opacity = '0';
      document.getElementById("NP").style.opacity = '0';
    }, delayInMilliseconds);

    setTimeout(function () {
      document.getElementById('texto').style.opacity = '1';
      document.getElementById("ContadorSenha").style.opacity = '1';
      document.getElementById("NP").style.opacity = '1';
    }, initdelayInMilliseconds);
  }
})
///////////////////////////////////////////////////////////////////////////////////////////
let contadorP = document.getElementById("ContadorSenhaP")
contadorP.innerText = localStorage.getItem("contadorP") || 0

/*FUNÇÃO PARA INCREMENTAR */
function incrementarP() {
  contadorP.innerText = parseInt(contadorP.innerText) + 1
}
/*FUNÇÃO PARA DECREMENTAR */
function decrementarP(){
  senhaAntP.innerText = parseInt(contadorP.innerText) - 1

}

/*SALVAR SENHA CHAMADA NO LOCAL STORAGE*/
function salvarSenhaP() {
  localStorage.setItem("contadorP", contadorP.innerText)
  localStorage.setItem("senhaAnteriorP", senhaAntP.innerText)
}

/*CHAMAR PROXIMA SENHA DO GRUPO PRIORITÁRIO*/
document.addEventListener('keydown', (event) => {
  let name = event.key;
  if (name === 'ArrowUp') {
    incrementarP()
    decrementarP()
    salvarSenhaP()
    audioPlayer.play();
    const msg = new SpeechSynthesisUtterance()
    msg.volume = 1
    msg.text = "ATENÇÃO! "+ document.getElementById('texto').innerHTML+" PRIORITÁRIA DE NÚMERO: "+localStorage.getItem('contadorP')
    speechSynthesis.speak(msg)

    var delayInMilliseconds = 100;
    var initdelayInMilliseconds = 500;

    setTimeout(function () {
      document.getElementById('textoP').style.opacity = '0';
      document.getElementById("ContadorSenhaP").style.opacity = '0';
      document.getElementById("P").style.opacity = '0';
      
    }, delayInMilliseconds);

    setTimeout(function () {
      document.getElementById('textoP').style.opacity = '1';
      document.getElementById("ContadorSenhaP").style.opacity = '1';
      document.getElementById("P").style.opacity = '1';
    }, initdelayInMilliseconds);
  }
})



