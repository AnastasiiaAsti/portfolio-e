// real life clock logic

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();


// links cube logic

let cube = document.querySelector('.cube');
let radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
    }
// set initial side
changeSide();

radioGroup.addEventListener('change', changeSide);


// terminal emulator

const textDisplay = document.getElementById('text')
const phrases = ['Hey!','Welcome to my space.', 'My name is Asti.', 'I love to code.', 'And teach.', 'Thanks for stopping by.']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    
    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }
        
        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i === phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (100 - 50) + 100
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()