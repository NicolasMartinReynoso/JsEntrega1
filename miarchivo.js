alert("Bienvenido al calculador de promedios")

let alumnos = Number(prompt("Ingrese la cantidad de alumnos en la clase"))
let notaConcepto = 0
let notaPractica = 0
let notaTeorica = 0
let promedio = 0
let contadorPromedio = 0
let contadorDesaprobado = 0
let resultado = ""
let nombre
for (let i = 0; i < alumnos; i++) {
    nombre=prompt("Ingrese nombre del alumno")
    do {
        notaTeorica = Number(prompt("Ingrese la nota Practica del alumno " + nombre))
    } while (notaTeorica < 0 || notaTeorica > 10);
    do {
        notaPractica = Number(prompt("Ingrese la nota Practica del alumno " + nombre))
    } while (notaPractica < 0 || notaPractica > 10);
    do {
        notaConcepto = Number(prompt("Ingrese la nota Practica del alumno " + nombre))
    } while (notaConcepto < 0 || notaConcepto > 10);

    promedio = ((notaTeorica + notaPractica + notaConcepto) / 3).toFixed(1)


    if (promedio >= 7) {
        contadorPromedio = contadorPromedio + 1
    } else {
        contadorDesaprobado = contadorDesaprobado + 1
    }

    resultado = resultado + "\nLa nota promedio del alumno " + nombre + " es " + promedio

}

let porcentajeAprobado = ((contadorPromedio * 100) / alumnos)

resultado = resultado + "\nEl porcentaje de alumnos aprobados es de " + porcentajeAprobado.toFixed(2) + "\nEl numero de alumnos desaprobados es de " + contadorDesaprobado

alert(resultado)

alert("Gracias por utilizar nuestro calculador de promedio, hasta pronto")


