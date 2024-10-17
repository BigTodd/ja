const h1 = document.querySelector('#haslo')
const h2 = document.querySelector('#phaslo')
const span = document.querySelector('#span')
const but = documnet.querySelector('button')
const span2 = document.querySelector('#span2')

function dzadza(){
    const cz = h1.value != h2.value
    if(cz){
        span.innerHTML = "nie zgadza sie"
        span.style.color = "red"
    }
    const spr = h1.value.length <= 7
    if(spr){
        span.innerHTML = "za krótkie hasło"
        span.style.color = "red"
    }
    else{
        span.innerHTML = "zgadza sie"
        span.style.color = "green"
    }
}
but.addEventListener(dzadza)


