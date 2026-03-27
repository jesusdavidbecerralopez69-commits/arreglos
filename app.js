let colores = ["Rojo", "Azul", "Verde"];
colores.push("Amarillo")
console.log(colores);
colores.pop()

colores.unshift("Negro")
console.log(colores);

colores.shift()
console.log(colores);

for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}
/*
**/
let persona = {

nombre: "Lucía",
  edad: 21,
    ciudad: "Cali"
}; 
console.log(colores[0]);
console.log(persona.edad);
console.log(persona["edad"]);
console.log(persona.length)
for (const propiedad in persona) {
  console.log(propiedad);
} 
console.log(persona.ciudad);
console.log(colores);
/*
 */
let animales = ["Leon", "perro", "gato", "conejo"]
animales.pop()
console.log(animales);

// Arreglo inicial
let frutas = ["Manzana", "Pera", "Banano"];

// Operaciones solicitadas
frutas.push("Mango");    // Agrega al final
frutas.pop();            // Elimina el último
frutas.unshift("Uva");   // Agrega al inicio
frutas.shift();         // Elimina el primero

// Resultado final
console.log("Cantidad de elementos actual:", frutas.length);
console.log("Arreglo final:", frutas);

let numeros = [2, 4, 6, 8, 10];

// Recorrido utilizando for clásico
console.log("Valores del arreglo:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Creación del objeto
let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
  genero: "Realismo mágico"
};

// Mostrar cada propiedad en consola
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año:", libro.año);
console.log("Género:", libro.genero);