
//variable que guardara la opcion escogida
let opcion
let opcionvalida = "si"

opcion = prompt("Escoja Bucle For(F), While(W) o Do While (D)")

while (opcionvalida == "si") {


    switch (opcion) {
        case "F":
            //utilizo estructura for
            console.log("Se escogió Uso de ciclo For:")
            //inicializo variable contador
            let i = 0

            for (i = 0; i < 6; i++) {
                console.log("For iteracion: " + i)
            }
            console.log("Fin de ciclo for:")
            opcionvalida="no"
            break
        case "W":
            //utilizo estructura while
            console.log("Se escogió Uso de ciclo While:")
            let j = 0
            while (j < 4) {
                console.log("While iteración: " + j)
                j++
            }
            console.log("Fin de ciclo While:")
            opcionvalida="no"
            break
        case "D":
            //utilizo estructura do while
            console.log("Se escogió Uso de ciclo Do While:")
            let k = 0
            do {
                console.log("Do While iteración: " + k)
                k += 1
                if (k == 4) {
                    console.log("Se llegó a la última iteración Do While:")
                }

            } while (k < 4)
            //fin estructura do while
            opcionvalida="no"
            break

        default:
            console.log("Opción No Válida. Debe escoger: F/W/D")
            opcion = prompt("Escoja Bucle For(F), While(W) o Do While (D)")
            break
    }

}

console.log ("Autor: Percy Guerra")
console.log("Fin de Desafio 1:")




