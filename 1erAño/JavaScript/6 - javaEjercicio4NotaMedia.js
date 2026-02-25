
//Números
let primeraNota;
let segundaNota;
let notaMedia;

// String
let nombre= prompt("Introduce tu nombre");

// Boolean
let resultado;

// Usuario
primeraNota= parseFloat(prompt("Introduce primer nota"));
segundaNota= parseFloat(prompt("Introduce segunda nota"));

//Cálculos
notaMedia=(primeraNota+segundaNota)/2;;
resultado= (notaMedia>= 5);

//Muestras
alert("Hola "+ nombre + " tu nota media es: "+ notaMedia);
alert(" Tu nota media es: "+ notaMedia);
console.log(resultado?"HAS APROBADO":"HAS SUSPENDIDO");