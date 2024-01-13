
const inputNumberOne = document.querySelector('.number_one');
const inputNumberTwo = document.querySelector('.number_two');
const selectOperation = document.querySelector('.select_operation');
const buttonResult = document.querySelector('.button_result');
const outputResult = document.querySelector('.output_result');
const OPERATIONS = {
	sum: '+',
	substract: '-',
	multiply: '*',
	division: '/',
}

function sum(a, b) {
	return a + b;
}
function substract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function division(a, b) {
	return a / b;
}


function calculate({a, b, operation}) {
	let result = 'Оператор не выбран';

	switch(operation) {
	   case OPERATIONS.sum:
	   	result = sum(a, b);
	   	break;
	
	   case OPERATIONS.substract:
	   	result = substract(a, b);
	   	break;
    
       case OPERATIONS.multiply:
	   	result = multiply(a, b);
	   	break;

	   case OPERATIONS.division:
	   	result = division(a, b);
	   	break;

	   default:
	   	break;
	 }

	return result;
}

buttonResult.addEventListener('click', function() {
	const a = Number(inputNumberOne.value);
	const b = Number(inputNumberTwo.value);
	const operation = selectOperation.value;
	const result = calculate ({a, b, operation});
	
	outputResult.innerHTML = result;
});

