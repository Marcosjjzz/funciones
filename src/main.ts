/*
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

*/

interface grupoMusical {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
}
const estiloGrupo = "background-color: green; font-size: 20px; font-weight: bold"
const popRock = "🎵 Pop Rock"
const rock = "🎸 Rock"
const hardRock = "🤘 Hard Rock"
const clasica = "🎼 Clásica"

const grupo1 : grupoMusical = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: popRock,
}
const grupo2 : grupoMusical = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock,
}
const grupo3 : grupoMusical = {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true,
    genero: hardRock,
}
const grupo4 : grupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica,
}
const grupo5 : grupoMusical = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock,
}

console.log (`%c${grupo1.nombre}`, estiloGrupo)
console.log (grupo1)
console.log (`%c${grupo2.nombre}`, estiloGrupo)
console.log (grupo2)
console.log (`%c${grupo3.nombre}`, estiloGrupo)
console.log (grupo3)
console.log (`%c${grupo4.nombre}`, estiloGrupo)
console.log (grupo4)
console.log (`%c${grupo5.nombre}`, estiloGrupo)
console.log (grupo5)