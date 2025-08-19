// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

const msgEl = document.getElementById('msg')
const randomNumber =  getRandomNumber()
console.log('randomNumber----', randomNumber);

// Init speech rocognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new window.SpeechRecognition()

// Start recognition
recognition.start()

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript
  
  writeMsg(msg)
  checkNumber(msg)
}

// Write message what user speaks
function writeMsg(msg) {
  msgEl.innerHTML = `
    <div>You said:</div>
    <span class="box">${msg}</span>
  `
}

// Check number
function checkNumber(msg) {
  const num = +msg;
 
  if(Number.isNaN(num)) {
    msgEl.innerHTML += '<div>That is not a valid number</div>';
    return;
  }

  if(num > 100 || num < 1 ) {
    msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
    return;
  }

  if(num === randomNumber) {
    document.body.innerHTML = `
      <h2>Congrats! You have guessed it right! <br><br>
        It was ${num}
      </h2>
      <button class="play-again" id="play-again" onclick="playAgain()" >
        Play Again
      </button>
    `
  } else if(num > randomNumber) {
     msgEl.innerHTML += '<div>GO LOWER</div>';
  } else {
     msgEl.innerHTML += '<div>GO HIGHER</div>';
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

function playAgain() {
  window.location.reload()
}

// Speak result
recognition.addEventListener('result', onSpeak)

// End SR service
recognition.addEventListener('end', () => recognition.start())
