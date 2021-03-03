console.log('Hola Mundo')

// Tipos de datos en JS
// String: Cadena de caracteres. 'a' 'hola' 'chanchito feliz'
// String: Cadena de caracteres. "a" "Hola" "Chanchito feliz"
// Boolean: true false.
// Null: null o nulo.
// Number: numero entero. 123123212 ["123"(String) != 123(Number)]
// Undefined: Sin definir.
// Object: objeto(cualquier combinacion de tipos de datos, funciones, etc...)

//Definicion de variables
//var(tratar de evitar)
//let
//const

//var miPrimeraVariable = 'lala'

// let miPrimeraVariable = 'Mi primera variable!'
// console.log(miPrimeraVariable);

// miPrimeraVariable = 'Esto ha cambiado'
// console.log(miPrimeraVariable);

// let miBoolean = true
// let miOtroBoolean = false

// let miNumero = 0 // Nombres de variables acorde a lo que se escribe. Buena Practica
// let miNumero2 = 12
// let miNumero3 = -258

// console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBoolean)

// let undef
// console.log(undef)

// let nulo = null
// console.log(nulo)

//Objeto: Agrupacion de datos que hacen sentido entre si.

// // Objeto Vacio
// const miPrimerObjeto = {} 

//Objeto con propiedades
const miObjeto = {
    unNumero: 12,
    unString:'Esta cadena de caracteres',
    unaCondicion:true, // esta , es una buena practica.
}

// console.log(miObjeto)
//console.log(miObjeto.unNumero)

const arrVacio = []
const arr = [1,2,'hola',miObjeto]

// console.log(arrVacio, arr)
arr.push(5)// Agregar datos al arreglo

// console.log(arr)

arrVacio.push(5)
arrVacio.push(7)
arrVacio.push('hola')
arrVacio.push('mañana')
arrVacio.push(true)

console.log(arrVacio)

// Una lista es un conjunto de datos del mismo tipo
// Un arreglo es un conjunto de datos sin importar el tipo de datos

