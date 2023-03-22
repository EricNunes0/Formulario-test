function checkInput(input) {
	if(input.length == 0) {
		missingInput();
		return "null";
	};
	return input;
}

function missingInput(input) {
	console.log('Você não preencheu o formulário');
};

function getSubmit() {
	let name = document.getElementById('name-input').value;
	let sobrenome = document.getElementById('sobrenome-input').value;
	let age = document.getElementById('age-input').value;
	let checkName = checkInput(name);
	let checkSobrenome = checkInput(sobrenome);
	let checkAge = checkInput(age);
	console.log(checkName, checkSobrenome, checkAge);
	let proceed = confirm(`Tem certeza que suas informações estão corretas?`);
	if(proceed == true) {
		document.getElementById('name-answer').innerText = checkName;
		document.getElementById('sobrenome-answer').innerText = checkSobrenome;
		document.getElementById('age-answer').innerText = checkAge;
		let tbl = document.getElementById('table-list');
		let tr = tbl.insertRow();
		for(let i = 0; i <= 2; i++) {
			let td = tr.insertCell();
			td.appendChild(document.createTextNode('Não informado'));
		}
	}
}