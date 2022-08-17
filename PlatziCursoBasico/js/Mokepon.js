let ataqueJugador
let ataqueEnemigo
let resultado
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar= document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }   

    crearMensaje()
}

function crearMensaje(){
    combate ()
    let sectionMensajes =document.getElementById ('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado
    sectionMensajes.appendChild(parrafo);
}

function combate (){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
   if(ataqueJugador == ataqueEnemigo){
    resultado = 'Empate'
   }
   else if( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ){
    resultado = 'Ganaste'
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else if( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
    resultado = 'Ganaste'
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else if( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
    resultado = 'Ganaste'
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else{
    resultado = 'Perdiste'
    vidaJugador--
    spanVidasJugador.innerHTML = vidaJugador
   }

   revisarVidas()
}

function revisarVidas(){
    if (vidaEnemigo == 0){
        alert('Ganaste')
       }
       else if(vidaJugador == 0){
        alert('Perdiste')

        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true
       }
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)