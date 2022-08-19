//Funções
function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	if (peso > 10 && peso < 400 && altura > 0.20 && altura < 3.00) {
		var imcNovo = calculaImc(peso, altura);
		tdImc.textContent = imcNovo;
	}
	else {
		tdImc.textContent = "Peso e/ou altura invalida";
		paciente.classList.add("paciente-invalido");
		
	}
}
