class Mano {
    cartas = []

    constructor () {}

    agregarCarta(carta) {
        this.cartas.push(carta)
    }

    sumarPuntos() {
        let puntos = 0

        this.cartas.forEach((carta) => {

            if (carta.rango == 'A') {
                if (puntos <= 10) {
                    puntos += 11;
                }
            }

            puntos += carta.valor
        })

        return puntos
    }
}

export default Mano