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

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
   
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    


    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        sectionSeleccionarAtaque.style.display = 'block'
        sectionSeleccionarMascota.style.display = 'none'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        sectionSeleccionarAtaque.style.display = 'block'
        sectionSeleccionarMascota.style.display = 'none'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        sectionSeleccionarAtaque.style.display = 'block'
        sectionSeleccionarMascota.style.display = 'none'
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

    combate()
}

function crearMensaje(resultado){
    
    let sectionMensajes =document.getElementById ('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado
    sectionMensajes.appendChild(parrafo);
}
function crearMensajeGanador(resultadoFinal){
    let sectionMensajes =document.getElementById ('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo);
}


function combate (){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
   if(ataqueJugador == ataqueEnemigo){
    crearMensaje("Empate")
   }
   else if( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ){
    crearMensaje("Ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else if( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
    crearMensaje("Ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else if( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
    crearMensaje("Ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML = vidaEnemigo
   }
   else{
    crearMensaje("Perdiste")
    vidaJugador--
    spanVidasJugador.innerHTML = vidaJugador
   }

   revisarVidas()
}

function revisarVidas(){
    let sectionReiniciar = document.getElementById('reiniciar')

    if (vidaEnemigo == 0){
        crearMensajeGanador('Ganaste :D')
        desabalitarBotones()
        sectionReiniciar.style.display = 'block' 
       }
       else if(vidaJugador == 0){
        crearMensajeGanador('Perdiste :c')
        desabalitarBotones()
        sectionReiniciar.style.display = 'block'
       }
}

function desabalitarBotones(){
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)