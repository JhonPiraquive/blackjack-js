import Carta from './Carta.js'
import _ from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.js';

class Mazo {
    cartas = []

    constructor() {
        this.llenar()
        this.barajarCartas()
    }

    llenar() {
        let tipos = [
            'Corazon',
            'Diamante',
            'Pica',
            'Trebol'
        ]
        let cartas = [
            {
                'rango': '2',
                'valor': 2
            },
            {
                'rango': '3',
                'valor': 3
            },
            {
                'rango': '4',
                'valor': 4
            },
            {
                'rango': '5',
                'valor': 5
            },
            {
                'rango': '6',
                'valor': 6
            },
            {
                'rango': '7',
                'valor': 7
            },
            {
                'rango': '8',
                'valor': 8
            },
            {
                'rango': '9',
                'valor': 9
            },
            {
                'rango': '10',
                'valor': 10
            },
            {
                'rango': 'J',
                'valor': 10
            },
            {
                'rango': 'Q',
                'valor': 10
            },
            {
                'rango': 'K',
                'valor': 10
            },
            {
                'rango': 'A',
                'valor': 1
            }
        ]

        tipos.forEach((tipo) => {
            for (var carta of cartas) {
                this.cartas.push(new Carta(tipo, carta.rango, carta.valor))
            }
        })
    }

    barajarCartas() {
        this.cartas = _.shuffle(this.cartas)
    }

    entregarCarta() {
        let ultimaCarta = _.last(this.cartas)
        this.cartas.pop()
        return ultimaCarta
    }
}

export default Mazo