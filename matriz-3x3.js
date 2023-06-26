// let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// //Mostrar la matriz por pantalla

// console.log("Matriz")
// for (let i = 0; i < matriz.length; i++) {
//     console.log(matriz[i].join("\t"))
// }

// //SUMA MATRICES
// function suma(matriz1, matriz2) {
//     let resultado = []
//     for (let i = 0; i < matriz1.length; i++) {
//         let fila = []
//         for (let j = 0; j < matriz1[i].length; j++) {
//             fila.push(matriz1[i][j] + matriz2[i][j])
//         }
//         resultado.push(fila)
//     }
//     return resultado;
// }
// let matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matriz2 = [[1, 2, 3], [1, 1, 1], [2, 3, 4]];
// let sumas = suma(matriz1, matriz2)
// console.log(sumas)

// //SUMA DE VECTORES
// function suma(vector1, vector2) {
//     const resultado = [];
//     for (let i = 0; i < vector1.length; i++) {
//         const fila = [];
//         const columnas = Math.min(vector1[i].length, vector2[i].length);
//         for (let j = 0; j < columnas; j++) {
//             fila.push(vector1[i][j] + vector2[i][j]);
//         }
//         resultado.push(fila);
//     }
//     return resultado;
// }
// const vector1 = [[3, 5, 7, 8], [1, 2]];
// const vector2 = [[1, 2, 3, 4], [5, 6, 7, 8]];
// const sumas = suma(vector1, vector2);
// console.log(sumas);

// //Matriz Diagonal
// function matrizDiagonal(matriz) {
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (i !== j && matriz[i][j] !== 0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// let matriz = [[1, 0, 0], [0, 2, 0], [0, 0, 3]]; //true
// console.log(matrizDiagonal(matriz))

// let otramatriz = [[1, 0, 1], [0, 2, 1], [1, 0, 3]]; //false
// console.log(matrizDiagonal(otramatriz))

// //Crear dos matrices de nxn y sumar sus valores, los resultados se deben almacenar en otra matriz. Los valores y la longitud, serán insertados por el usuario. mostrar las matrices originales y el resultado.

// //Pedir al usuario la longitud de las matrices
// let n = parseInt(prompt("Ingrese la longitud de las matrices nxn:"));

// // Crear las matrices
// let matriz1 = crearMatriz(n);
// let matriz2 = crearMatriz(n);

// function crearMatriz(n) {
//   let matriz = [];
//   for (let i = 0; i < n; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < n; j++) {
//       matriz[i][j] = parseInt(prompt(`Digite La matriz ${i},${j}`));
//     }
//   }
//   return matriz;
// }

// function sumarMatriz(matriz1, matriz2) {
//   let resultado = [];
//   for (let i = 0; i < matriz1.length; i++) {
//     resultado[i] = [];
//     for (let j = 0; j < matriz1[i].length; j++) {
//       resultado[i][j] = matriz1[i][j] + matriz2[i][j];
//     }
//   }
//   return resultado;
// }

// //Resultado de las matrices
// let resultado = sumarMatriz(matriz1, matriz2);

// function mostrarMatriz(matriz) {
//   console.log("Matriz:");
//   for (let i = 0; i < matriz.length; i++) {
//     let fila = "";
//     for (let j = 0; j < matriz[i].length; j++) {
//       fila += matriz[i][j] + "\t";
//     }
//     console.log(fila);
//   }
// }

// //Mostrar las matrices originales y el resultado
// console.log("Matriz 1:");
// mostrarMatriz(matriz1);

// console.log("Matriz 2:");
// mostrarMatriz(matriz2);

// console.log("Resultado de la suma:");
// mostrarMatriz(resultado);