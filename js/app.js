const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const calcularBtn = document.getElementById("btn-calcular")
const resultadoP = document.getElementById('resultado');
const imcImagen = document.getElementById('imc-img')

calcularBtn.addEventListener('click', () => {
    // Obtener los valores de los inputs
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);
    let mensaje = '';
    let imagenNivelImc = '';

    // Validar que los valores sean números válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultadoP.textContent = 'Por favor ingresar numeros validos.';
	imcImagen.src = '../assets/img/error.png'
	return;
    }

    // Realizar la operación (cálculo de IMC)
    const imc = peso / (altura * altura);

    // Clasificación del IC
    if (imc <= 18.5) {
        mensaje = "Tu peso es Inferior al normal.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-<-18-5.webp';
	
    } else if (imc > 18.5 && imc < 24.9) {
        mensaje = "Tu peso es Normal.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-saludable.webp';
    } else if (imc >= 25 && imc <= 29.9) {
        mensaje = "Estás en Sobrepeso.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-sobrepeso.webp'
    } else if (imc >= 30 && imc < 34.9) {
        mensaje = "Tienes Obesidad I.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-obesidad-I.webp'
    } else if (imc >= 35 && imc < 39.9) {
        mensaje = "Tienes Obesidad II.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-obesidad-II.webp'
    } else if (imc >= 40) {
        mensaje = "Tienes Obesidad III.";
	imcImagen.src = '../assets/img/IMC-Indice-de-Masa-Corporal-obesidad-III.webp'
    }

    // Mostrar el resultado con la clasificación
    resultadoP.textContent = `Tu IMC es: ${imc.toFixed(1)} ${mensaje}`;
});

