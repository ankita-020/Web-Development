// https://www.pexels.com/search/child%20school/
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const textArea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
  { 
    image: './img/cute.jpg',
    text: "I'm cute"
  },
  { 
    image: './img/angry.jpg',
    text: "I'm angry"
  },
  { 
    image: './img/awestuck.jpg',
    text: "I'm awestuck"
  },
  { 
    image: './img/cry.jpg',
    text: "I don't like crying"
  },
  { 
    image: './img/curious.jpg',
    text: "I'm curious"
  },
  { 
    image: './img/grin.jpg',
    text: "I'm grinning"
  },
  { 
    image: './img/hurt.jpg',
    text: "I'm hurt"
  },
  { 
    image: './img/innocent.jpg',
    text: "I'm innocent"
  },
  { 
    image: './img/intelligent.jpg',
    text: "I'm intelligent"
  },
  { 
    image: './img/paint.jpg',
    text: "I want to paint"
  },
  { 
    image: './img/run.jpg',
    text: "I want to run"
  },
  { 
    image: './img/sad.jpg',
    text: "I'm sad"
  },
  { 
    image: './img/school.jpg',
    text: "I want to go to school"
  },
  { 
    image: './img/toy.jpg',
    text: "I want to buy this toy"
  }
]

data.forEach(createBox)

function createBox(item) {
  const box = document.createElement('div')
  const { image, text } = item

  box.classList.add('box')
  box.innerHTML = `
    <img src='${image}' alt='${text}' />
    <p class="info">${text}</p>
  `
  box.addEventListener('click', () => {
    setTextMessage(text)
    speakText()

    // Add active effect
    box.classList.add('active')
    setTimeout(() => {
      box.classList.remove('active')
    }, 800)
  })

  main.appendChild(box)
}

// Init speech synthesis
const message = new SpeechSynthesisUtterance()

// Store voices
let voices = []

function getVoices () {
  voices = speechSynthesis.getVoices()
  
  voices.forEach(voice => {
    const option = document.createElement("option");
    option.value = voice.name
    option.innerText = `${voice.name} ${voice.lang}`
    voiceSelect.appendChild(option)
  })
}

// set text
function setTextMessage(text) {
  message.text = text
}

function speakText() {
  speechSynthesis.speak(message)
}

function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value)
}

// Voice changed
speechSynthesis.addEventListener('voiceschanged', getVoices)

// Toggle text box
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'))

closeBtn.addEventListener('click', () =>  document.getElementById('text-box').classList.remove('show'))

// Change voice
voiceSelect.addEventListener('change', setVoice)

// Read text
readBtn.addEventListener('click', () => {
  setTextMessage(textArea.value)
  speakText()
})

getVoices()

