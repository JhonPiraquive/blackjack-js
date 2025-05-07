import Jugador from "./Jugador.js"
import Mazo from "./Mazo.js"

class Partida {
    dealer
    jugadores = []
    mazo

    constructor() {
        this.dealer = new Jugador()
        this.mazo = new Mazo()

        // this.jugador = new Jugador()
        // iniciar()
    }

    // iniciar() {
        // this.dealer.pedir(this.mazo.entregarCarta()) //Entrega carta 1
        // this.dealer.pedir(this.mazo.entregarCarta()) // Entrega carta 2

        // this.jugador.pedir(this.mazo.entregarCarta()) //Entrega carta 1
        // this.jugador.pedir(this.mazo.entregarCarta()) // Entrega carta 2
    // }

    
}

export default Partida