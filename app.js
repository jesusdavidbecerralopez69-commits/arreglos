// Crear el arreglo inicial
let aprendices = ["Carlos", "Ana", "Luis", "Marta", "Diego"];

// Agregar un nombre al final
aprendices.push("Elena");

// Eliminar el primer nombre
aprendices.shift();

// Mostrar la cantidad total
console.log("Lista actualizada:", aprendices);
console.log("Cantidad total de aprendices:", aprendices.length);

//2. Inventario de frutas
let frutas = ["Manzana", "Pera", "Uva"];

// Agregar al inicio
frutas.unshift("Banano");

// Retirar el último elemento
frutas.pop();

// Mostrar arreglo final
console.log("Inventario final:", frutas);

// Recorrer con for...of
for (let fruta of frutas) {
    console.log("Fruta disponible:", fruta);
}

//3. Notas de actividades
let notas = [4.5, 3.8, 5.0, 2.5, 4.0, 3.2];
let suma = 0;

// Recorrer el arreglo usando un ciclo for clásico
for (let i = 0; i < notas.length; i++) {
    // Sumamos el valor de la posición actual a nuestra variable suma
    suma = suma + notas[i];
}

// Calculamos el promedio dividiendo el total por la cantidad de notas
let promedio = suma / notas.length;

// Mostramos el resultado tal cual lo entrega el sistema
console.log("El promedio de las notas es:", promedio);

//4. Características de un celular
let celular = {
    marca: "Xiaomi",
    modelo: "Redmi A3x",
    año: 2024,
    estado: "Activo",
};

// Mostrar propiedades individualmente
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Año:", celular.año);
console.log("Estado:", celular.estado);

//5. Lista de tareas
let tareas = [];

// Agregar tres actividades
tareas.push("Estudiar JavaScript");
tareas.push("Subir evidencia a GitHub");
tareas.push("Revisar material de apoyo");

// Eliminar la última
tareas.pop();

// Mostrar resultado
console.log("Tareas pendientes:", tareas);

// 6. Describiendo un objeto personal: Cree un objeto que represente algo que lleve
// consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
// propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
// Object.entries().

let bolsoDeCintura = {
    nombre: "bolso",
    marca: "sport",
    color: "gris",
    tamaño: "20x13",
    capacidad: "1 litro",
};

for (const caracteristica of Object.entries(bolsoDeCintura)) {
    console.log(caracteristica);
}

/*
7. Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
arreglo usando for...of y muestre solo las edades mayores o iguales a 18.
*/

let edades = [18, 12, 14, 23, 19];
for (const edad of edades) {
    if (edad >= 18) {
        console.log(edad);
    }
}

/*
8. Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
número de páginas y género. Luego imprima un mensaje descriptivo usando estas
propiedades, por ejemplo:
"El libro '___' del autor ___ pertenece al género ___."
*/

let libro = {
    titulo: "atomic habits",
    autor: "James Clear",
    numeroPaginas: 305,
    genero: "auto ayuda",
};
console.log(`El libro ${libro.titulo} del autor ${libro.autor} pertenece al genero ${libro.genero} y tiene ${libro.numeroPaginas} paginas`);

/*
9. Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
tres objetos. Cada objeto debe representar un producto con propiedades como
nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
cada producto.
*/

let productos = [
    { nombre: "celular", marca: "HUAWEI ", color: "negro", precio: "2000000", disponibilidad: 10 },
    {
        nombre: "audifonos",
        marca: "Sony",
        color: "negro",
        precio: "90000",
        disponibilidad: 20,
    },
    {
        nombre: "teclado",
        marca: "redragon",
        color: "blanco",
        precio: "300000",
        disponibilidad: 2,
    },
];

for (const producto of productos) {
    console.log(producto.nombre);
}

/*
10.Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
con un ejemplo.
a. Lista de colores favoritos. lista ya que todos son colores
b. Información completa de un estudiante. objeto ya que se necesita un orden
c. Precios de diferentes camisetas. objetos ya que se debe relacionar el precio con el tipo de camiseta
d. Descripción de un computador portátil. objeto tiene caracteristicas que deben ser ordenadas de forma clara
*/

let colores = ["rojo", "azul", "negro", "blanco"];
let estudiante = {
    nombre: "Jhon",
    apellido: "Gelvez",
    edad: 19,
};
let preciosCamisetas = [
    { tipo: "Polo", precio: 45000 },
    { tipo: "Oversize", precio: 60000 },
    { tipo: "Deportiva", precio: 35000 },
];

let portatil = {
    marca: "Asus",
    procesador: "Ryzen 7",
    ram: "16GB",
    sistemaOperativo: "Windows 11",
};
