
const ANIO_ACTUAL = 2026;

let ANIO_NACIMIENTO = prompt("Introduce tu ao de nacimiento");

console.log(typeof ANIO_NACIMIENTO);

let edad = ANIO_ACTUAL - ANIO_NACIMIENTO;

alert("Tienes aproximadamente:", edad, "años");
console.log("Edad aproximada: ", edad);