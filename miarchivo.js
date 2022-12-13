alert("Bienvenido al calculador de promedios")

let numAlumnos = 0
let matematica = { nombre: "matematica", alumnos: [] }
let lengua = { nombre: "lengua", alumnos: [] }
let historia = { nombre: "historia", alumnos: [] }
let biologia = { nombre: "biologia", alumnos: [] }
let materias = [matematica, lengua, biologia, historia]
let opcion
let menuDos = 0
let promedio = 0
let aprobados = []
let desaprobados = []


opcion = Number(prompt("Ingrese la materia a la que cargara notas, siendo: \n1.Matematica \n2.Lengua \n3.Biologia \n4.Historia \n5.Salir"))
switch (opcion) {
    case 1:
        numAlumnos = Number(prompt("Ingrese la cantidad de alumnos en el curso"))
        carga("matematica")
        break;
    case 2:
        numAlumnos = Number(prompt("Ingrese la cantidad de alumnos en el curso"))
        carga("lengua")
        break;

    case 3:
        numAlumnos = Number(prompt("Ingrese la cantidad de alumnos en el curso"))
        carga("biologia")

        break;
    case 4:
        numAlumnos = Number(prompt("Ingrese la cantidad de alumnos en el curso"))
        carga("historia")

        break;

    default:
        alert("la opcion seleccionada no es valida")
        break;
}



function carga(tema) {
    for (let i = 0; i < numAlumnos; i++) {
        let nombre = prompt("Ingrese el nombre del alumno")
        let apellido = prompt("Ingrese el apellido del alumno")
        do {
            notaTeorica = Number(prompt("Ingrese la nota Teorica del alumno " + apellido))
        } while (notaTeorica < 0 || notaTeorica > 10);
        do {
            notaPractica = Number(prompt("Ingrese la nota Practica del alumno " + apellido))
        } while (notaPractica < 0 || notaPractica > 10);
        do {
            notaConcepto = Number(prompt("Ingrese la nota Conceptual del alumno " + apellido))
        } while (notaConcepto < 0 || notaConcepto > 10);

        promedio = ((notaTeorica + notaPractica + notaConcepto) / 3).toFixed(1)

        alumno = { nombre: apellido, nota: promedio }

        if (promedio >= 7) {
            aprobados.push(alumno)
        } else {
            desaprobados.push(alumno)
        }

        materias.find(e => e.nombre === tema).alumnos.push({ nombre: nombre, apellido: apellido, notaTeorica: notaTeorica, notaPractica: notaPractica, notaConcepto: notaConcepto })

    }
}


let notaFinal = "Los alumnos aprobados son: "

aprobados.forEach((aprobado) => {
    notaFinal = notaFinal +"\n"+ aprobado.nombre + " con " + aprobado.nota

})

notaFinal = notaFinal + "\nLos alumnos desaprobados son: "

desaprobados.forEach((desaprobado) => {
    notaFinal = notaFinal+"\n" + desaprobado.nombre + " con " + desaprobado.nota

})

alert(notaFinal)


function porcentaje(parametro, num) {
    cantidad = parametro.length
    return ((cantidad * 100) / num).toFixed(1)
}

alert("El porcentaje de aprobados es " + porcentaje(aprobados, numAlumnos)+ "%")
alert("El porcentaje de desaprobados es " + porcentaje(desaprobados, numAlumnos)+ "%")

alert("Gracias por utilizar nuestro calculador de promedio, hasta pronto")