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
  estado: "Activo"
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