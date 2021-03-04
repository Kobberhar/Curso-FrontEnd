// FUNCIONES

// //Sin Argumentos
    // function iterar() {
    //     const numeros = [1,2,'Hola',4,5]

    //     for (let i = 0; i < numeros.length; i++) {
    //         console.log(numeros[i]);
    //     }
    // }

    // iterar();


// //Con Argumentos
    // function iterar(arg1) {
    //     for (let i = 0; i < arg1.length; i++) {
    //         console.log(arg1[i]);
    //     }
    // }

    // const numeros = [1,2,'Hola',4,5]
    // const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz', 'Chanchito Triste']
    // iterar(nombres);


// // RETURN
    // function suma (a,b) {
    //     return a+b;
    // }

    // const resultado = suma (1,2)
    // const resultado2 = suma (5,6)
    // const resultado3 = suma (resultado, resultado2)

    // console.log('Resultado', resultado3);


// //CALLBACKS

    function sumar(a,b,cb) {
         const resultado = a+b
         cb(resultado) // Ejecutando la funcion "callback" con el resultado de la suma
    }

    // function callback(result) {
    //     console.log('Resultado',result);
    // }
    // sumar(2,3, callback) //Pasando la funcion callback como valor, esto es sin "()"


// // FAT ARROW FUNCTION
    //     //No es necesario declararlas como Function

    // const miFatArrowFunction = (a, b) => a + b // Una sola linea
    // const otraFAF = (a,b) => { // Varias lineas
    //     return a + b
    // }

    // //const r = miFatArrowFunction(1,2)
    // const r = otraFAF(1,2)
    // console.log(r);


// FUNCIONES ANONIMAS

sumar(2,3, function (r){
    console.log('Soy una funcion anonima y mi resultado es', r);
})