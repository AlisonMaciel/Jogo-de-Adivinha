const randomBumber = Math.round(Math.random() * 10)
const button_start = document.querySelector("#button_start")
const button_back = document.querySelector("#button_back")
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let Attempts = 1

function guessing_game() {
  
  event.preventDefault() // resumindo é Não faça o padrao no caso o padrao é (nao envive o formulario nem recarregue a pagina) isso é usado para botoes dentro do form no html
  
  const inputnumber = document.querySelector("#inputnumber").value

  if(inputnumber == "") {
    alert("Tem que ter um número")
  } else if (inputnumber > 10 ) {
    alert("Números maiores que 10 não são permitidos")
  } else if (inputnumber < 0) {
    alert("Números menores que 0 não são permitidos")
  } 
  else {
    if(inputnumber == randomBumber) {
      screen1.style.display = "none"
      screen2.style.display = "block"
      
      screen2.
        querySelector("h2").
          innerHTML = `Acertou em ${Attempts} tentativas!`
    }
    Attempts++
  }
  document.
    querySelector("#inputnumber").
      value = ""
}

function resetClick() {

  event.preventDefault()
  
  screen2.style.display = "none"
  screen1.style.display = "block"
  Attempts = 1
}

button_start.addEventListener("click", guessing_game)
button_back.addEventListener("click", function() {
  resetClick()
})