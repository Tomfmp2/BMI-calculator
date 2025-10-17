const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const imc = peso / (altura**2);

// Calificacion de IMC
if (imc <= 18.5){
	console.log("Tu peso es Inferior al normal")
} else if (imc > 18.5 && imc < 24.9){
	console.log("Tu peso es Normal")
} else if  (imc > 25 && imc <= 29.9){
	console.log("Estas en Sobrepeso ")
}else if( imc >= 30 && imc < 34.9){
	console.log("Tienes Obesidad I")
}else if (imc >= 35 && imc < 39.9){
	console.log("Tienes Obesidad II")
}else if (imc > 40){
	console.log("Tienes Obesidad III")
}
console.log(imc)
