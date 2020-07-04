function getNumber(num){
	var input_var = document.getElementById('show_form');
	switch (num){
		case 1:
		input_var.value += '1';
		break;
		case 2:
		input_var.value += '2';
		break;
		case 3:
		input_var.value += '3';
		break;
		case 4:
		input_var.value += '4';
		break;
		case 5:
		input_var.value += '5';
		break;
		case 6:
		input_var.value += '6';
		break;
		case 7:
		input_var.value += '7';
		break;
		case 8:
		input_var.value += '8';
		break;
		case 9:
		input_var.value += '9';
		break;
		case 0:
		input_var.value += '0';
		break;
	}
}
//clear Screen btn
function clearScreeb(){
	document.getElementById('show_form').value = "";
	document.getElementById('ansure_form').value = "";
}
//+-*/ btn
function getOperand(operand){
	var input_var = document.getElementById('show_form');
	switch (operand){
		case '+':
			input_var.value += '+';
		break;
		case '-':
			input_var.value += '-';
		break;
		case 'x':
			input_var.value += 'x';
		break;
		case '/':
			input_var.value += '/';
		break;
		case '+/-':
			input_var.value += '-'+ input_var.value;
		break;
	}
}
//Backspace 
function backspace(){
	var input_var = document.getElementById('show_form');
	var x = input_var.value;
	if (x.length > 0){
		x = x.substring(0, x.length-1); //remove the last cracters in input
		input_var.value = x;
	}
}
//Ansure btn
function ansureBtn(){
	var input_var = document.getElementById('show_form');
	ans = Math.floor(+eval(input_var.value));
	document.getElementById('ansure_form').value = '' + ans;
}













