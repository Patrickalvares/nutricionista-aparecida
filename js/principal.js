var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	if (peso > 10 && peso < 400 && altura > 0.20 && altura < 3.00) {
		var imcNovo = peso / (altura * altura);
		tdImc.textContent = imcNovo.toFixed(2);
	}
	else {
		tdImc.textContent = "Peso ou altura invalida";
	}
}