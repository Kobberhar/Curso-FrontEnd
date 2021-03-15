//SPREAD OPERATOR

// const a = {b:1} // Se crea variable 'a'
// const b = a // Se crea variable 'b' = 'a'
// b.c = 2 // Se agrega 'c' a 'b', lo que ademas modifica a 'a'

// const c = {...a} // Spread Operator crea un objeto con todas las propiedades del objeto 'a' pero es independiente de 'a'
// c.d = 12


//PROMESAS

// Promise.resolve(2) // Devuelve la API de promesa
//     .then(valor => console.log(valor)) // Ejecuta una funcion a la cual se le entrega el valor de la promesa cuando sea resuelta

new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
})  
    .then(x => console.log(x))
    .catch(e => console.error(e))