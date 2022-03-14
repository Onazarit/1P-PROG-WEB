let obj = { // Se declara obj y se le agregan valores dentro
    nombre: 'Oscar',
    edad: 44,
    apellido: 'Nazarit',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

// console.log(obj.nombre); // Se llama a obj junto con el valor de nombre
// console.log(obj['nombre']); // ^

let myKey = 'nombre'; // Se declara myKey y se le asigna nombre
// console.log(obj[myKey]); // Se llama obj con myKey que hace referencia a nombre

myKey = 'keypress';
// console.log(obj[myKey]());
myKey = 'mouseOver';
// console.log(obj[myKey]());
// Se cambia el valor de myKey para que corresponda a las 2 funciones de obj y
// despues se mandan a llamar mostrando en la terminal los contenidos correspondientes

// * Console.logs anteriores comentados para no saturar la terminal *
let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("Hola desde el array");
});
// console.log(myArray);
// Se crea un Array que contiene varias cosas entre ellas obj el cual en el console log
// se muestra todo su contenido junto valores anteriorres y la función anonima que le sigue

// console.log(myArray[2].mouseOver());
// En el log selecciono la posición 2 de "myArray" la cual es obj y luego indico que
// se llame a mouseOver mostrando el log que tiene dentro

// console.log(myArray[3]());
// Selecciono la posición del array y le indico para que imprima lo que ejecute

let funcArray = []; // Se crea un nuevo array
// Se añaden 3 funciones anonimas al array
funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
})
// ^ Ejecuta todas las funciones anonimas contenidas en funcArrayen en orden