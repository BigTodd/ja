const h1 = document.querySelector('#haslo')
const h2 = document.querySelector('#phaslo')
const span = document.querySelector('#span')
const but = document.querySelector('button')
const em = document.querySelector('#email')
const im = document.querySelector('#imie')
const naz = document.querySelector('#nazwisko')

function dzadza(){
    const cz = h1.value != h2.value
    const spr = h1.value.length <= 7
    const spr2 = h1. value === '' || h2.value === '' || em.value === '' || im.value === '' || naz.value === ''
    if(spr){
        span.innerHTML = "za krótkie hasło"
        span.style.color = "red"
    }
    else if (spr2){
        span.innerHTML = "pole nie może być puste"
        span.style.color = "red"
        return
    }
    else if(cz){
        span.innerHTML = "nie zgadza sie"
        span.style.color = "red"
    }
    else{
        span.innerHTML = "zgadza sie"
        span.style.color = "green"
    }
}
but.addEventListener('click', dzadza)


