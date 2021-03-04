// Control de flujo

// IF

const edad = 5

if (edad > 5 && edad < 18) {
    console.log('Eres menor de edad');
} else {
    console.log('Eres mayor de edad');
}

// WHILE

let x = 0

while (x < 5) {
    console.log(x);
    x++;
}

// SWITCH

const y = 3

switch (y) {
    case 1: {
        console.log('Caso 1');
        break
    }
    case 2: {
        console.log('Caso 2');
        break
    }
    case 3:
        console.log('Caso 3');
        break
    default:
        console.log('Default');
        break
}

// FOR

const numeros = [1,2,'Hola',4,5]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}