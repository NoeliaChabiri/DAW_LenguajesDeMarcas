
// String
let nombre= prompt("Introduce tu nombre");
let resultado;

// numeros
let primeraNota= parseFloat(prompt("Introduce primer nota"));
let segundaNota= parseFloat(prompt("Introduce segunda nota"));
let notaMedia=(primeraNota+segundaNota)/2;;

//Cálculos
resultado= (notaMedia>= 5);

//Muestras
alert("Hola "+ nombre + " tu nota media es: "+ notaMedia);
alert(" Tu nota media es: "+ notaMedia);
console.log(resultado?"HAS APROBADO":"HAS SUSPENDIDO");