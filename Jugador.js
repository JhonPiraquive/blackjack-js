import Mano from "./Mano.js"

class Jugador {
    mano
    nombre

    constructor (nombre = 'Sin nombre') {
        this.mano = new Mano()
        this.nombre = nombre
    }

    pedir(carta) {
        this.mano.agregarCarta(carta)
    }
}

export default Jugador