const element = document.querySelector('#father')
let squares = ''
let positions = ['right', 'top', 'left', 'down']
let r = window.screen.width/2 
let t = window.screen.height/2
let index = 0
let count = 1
let number = 1
let isPrime = true
let opacity = 1
element.innerHTML += `<div class="ponto" style="right: ${r}px; top: ${t}px; background-color: red;"></div>`
const interval = setInterval(() => {
    for (let i = 1; i < (count*2)+1; i++) {
        number += 1
        if (positions[index] == 'right') {
            r -= 5
        } else if (positions[index] == 'top') {
            t -= 5
        } else if (positions[index] == 'left') {
            r += 5
        } else {
            t += 5
        }
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            squares += `<div class="ponto" style="right: ${r}px; top: ${t}px;"></div>`
        }
        isPrime = true
        if (i == count) {
            if (index == 3) {
                index = 0
            } else {
                index += 1
            }
        }
    }
    element.innerHTML += squares
    squares = ''
    count += 1
    if (index == 3) {
        index = 0
    } else {
        index += 1
    }
    if (count == 210) {
        clearInterval(interval)
    }
    if (opacity >= 0) {
        opacity -= 0.01
        document.querySelector('#title').style.opacity = opacity
        document.querySelector('#author').style.opacity = opacity
    }
}, 30)

function closeCaption() {
    let caption = document.querySelector('#caption')
    caption.style.left = '-100%'
}