
let matematica = { materia: "Matematica", alumnos: [] }
let lengua = { materia: "Lengua", alumnos: [] }
let historia = { materia: "Historia", alumnos: [] }
let biologia = { materia: "Biologia", alumnos: [] }
let materias = [matematica, lengua, biologia, historia]
let promedio
let aprobados = []
let desaprobados = []
let opcion = ""
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let contenedorMaterias = document.getElementById("contenedorMaterias")

for (const materia of materias) {
    contenedorMaterias.innerHTML = contenedorMaterias.innerHTML + `<div class="divMaterias"><button id="${materia.materia}" class="botonMaterias">${materia.materia}</button></div>`

}
contenedorMaterias.addEventListener("click", e => { llamarMateria(e.target.innerText) })

function llamarMateria(seleccion) {
    modal.style.display = "block";
    opcion = seleccion
}

function cargar() {
    nombre = document.getElementById("inputNombre").value;
    apellido = document.getElementById("inputApellido").value;
    notaTeorica = document.getElementById("inputTeorica").value;
    notaPractica = document.getElementById("inputPractica").value;
    notaConceptual = document.getElementById("inputConceptual").value;
    teorica = parseFloat(notaTeorica)
    practica = parseFloat(notaPractica)
    conceptual = parseFloat(notaConceptual)
    materias.find(e => e.materia === opcion).alumnos.push({ nombre: nombre, apellido: apellido, notaTeorica: notaTeorica, notaPractica: notaPractica, notaConceptual: notaConceptual })
    promedio = ((teorica + practica + conceptual) / 3).toFixed(1)
    alumno = { nombre: apellido, nota: promedio }
    if (promedio >= 7) {
        aprobados.push(alumno)
    } else {
        desaprobados.push(alumno)
    }

    localStorage.setItem(`historial`, JSON.stringify(materias));

    limpiar()

}
span.onclick = function () {
    modal.style.display = "none";
}



function limpiar() {
    document.getElementById("inputNombre").value = ""
    document.getElementById("inputApellido").value = ""
    document.getElementById("inputTeorica").value = ""
    document.getElementById("inputPractica").value = ""
    document.getElementById("inputConceptual").value = ""
    promedio = 0

}

let botonResultados = document.getElementById("botonResultados")
let botonDesaprobados = document.getElementById("botonDesaprobados")

botonResultados.addEventListener("click", mostrarResultados)
botonDesaprobados.addEventListener("click", mostrarDesaprobados)

let notafinal = ""
let resultado = document.createElement("div")


let listado = document.getElementById("listadoNotas")
listado.innerHTML = `<button id=botonLista>Obtener Listado</button>`
let botonHistorial = document.getElementById("botonLista")
botonHistorial.addEventListener("click", mostrarHistorial)


function mostrarHistorial() {
    let recuperarHistorial = JSON.parse(localStorage.getItem(`historial`))
    recuperarHistorial.forEach(detalle => {
        resultado.innerHTML = resultado.innerHTML+ `<div class="listaHistorial"><p>${detalle.materia}</p></div> `
        detalle.alumnos.forEach(alumno => {
            resultado.innerHTML = resultado.innerHTML + `<p class="listaHistorialNotas">${alumno.nombre} ${alumno.apellido} ${alumno.notaTeorica} ${alumno.notaPractica} ${alumno.notaConceptual}</p>`
        });
        document.body.append(resultado)
    });
}

function mostrarResultados() {

    notaFinal = "Los alumnos aprobados son: "
    aprobados.forEach((aprobado) => {
        notaFinal = notaFinal + "<br>" + aprobado.nombre + " con " + aprobado.nota
        resultado.innerHTML = `<p class="divNotaFinalA">${notaFinal}</p>`
    })
    document.body.append(resultado)
}

function mostrarDesaprobados() {
    notaFinal = "Los alumnos desaprobados son: "
    desaprobados.forEach((desaprobado) => {
        notaFinal = notaFinal + "<br>" + desaprobado.nombre + " con " + desaprobado.nota
        resultado.innerHTML = `<p class="divNotaFinalB">${notaFinal}</p>`
    })
    document.body.append(resultado)
}




