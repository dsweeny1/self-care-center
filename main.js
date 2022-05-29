var mantraButton = document.querySelector('#mantra-button')
var affirmationButton = document.querySelector('#affirmation-button')
var anotherWrapper = document.querySelector('.another-wrapper')
var receiveButton = document.querySelector('.receive-button')
var meditationBell = document.querySelector('.meditation-bell')
var radioButtons = document.querySelector('.radio-button-box')
var hiddenP = document.querySelector('p')
var clearButton = document.querySelector('.clear')

receiveButton.addEventListener('click', getMessage)
clearButton.addEventListener('click', clearMessage)

function getMessage() {
  if (affirmationButton.checked === true) {
    randomAffirmation()
  } else if (mantraButton.checked === true) {
    randomMantra()
  } else if (affirmationButton.checked === false && mantraButton.checked === false) {
    window.alert("Make a selection!");
  }
}

function randomAffirmation() {
  var showAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
  hiddenP.innerText = showAffirmation
  showHide()
}

function randomMantra() {
  var showMantra = mantras[Math.floor(Math.random() * mantras.length)]
  hiddenP.innerText = showMantra
    showHide()
}

function showHide() {
  hiddenP.classList.remove('hidden');
  meditationBell.classList.add('hidden');
  clearButton.classList.remove('hidden');
}

function clearMessage() {
  hiddenP.classList.add('hidden');
  meditationBell.classList.remove('hidden');
  clearButton.classList.add('hidden');
}
