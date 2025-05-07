import Jugador from "./Jugador.js";
import Partida from "./Partida.js";

document.addEventListener("DOMContentLoaded", function() {
    const partida = new Partida()

    const botonAgregarJugador = document.getElementById("agregar_jugador");

    botonAgregarJugador.addEventListener('click', (event) => {
        let nombreJugador = document.getElementById('nombre_jugador').value
        partida.jugadores.push(new Jugador(nombreJugador))

        console.log(partida.jugadores);
    })
});