//jq_task
function jqinfo(){
	let pib_p = /^[А-Яа-яІі\s]+$/;
	let group_p = /^[А-Яа-яІі]{2,2}-[0-9]{2,2}/;
	let email_p = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	let yob = document.getElementById('yob_input').value;
	let person = document.getElementById('pib_input').value;
	let group = document.getElementById('group_input').value;
	let email = document.getElementById('email_input').value;

	if(person == ''){
		alert('(JQ)- ПІБ не може бути пустим');
		return false;
	}

	if(yob < 1960 || yob > 2004){
		alert('(JQ)- Помилка. дата народження повинна бути \nв інтервалі 1960-2004');
		return false;
	}

	if(email == ''){
		alert('(JQ)- E-mail не може бути пустим');
		return false;
	}

	if(group == ''){
		alert('(JQ)- Група не може бути пустим');
		return false;
	}

	if(!pib_p.test(person)){
		alert('(JQ)- Прізвище Ім\'я по Батькові записувати українською мовою.');
		return false;
	}

	if(!group_p.test(group)){
		alert('(JQ)- Номер групи заповнювати згідно вашої реальної групи.\n Наприклад ФБ-95');
		return false;
	}

	if(!email_p.test(email)){
		alert('(JQ)- E-mail вказувати реальний, через який ви будете отримувати інформацію.');
		return false;
	}

	else {
		$.post(
        	'./phplist.php',
        	$(".form_ochka").serialize(),          
        	function(msg){
           	alert(msg);
        	}
    	);
	}

};


//js_task
function jsinfo(){
	let pib_p = /^[А-Яа-яІі\s]+$/;
	let group_p = /^[А-Яа-яІі]{2,2}-[0-9]{2,2}/;
	let email_p = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	let yob = document.getElementById('yob_input').value;
	let person = document.getElementById('pib_input').value;
	let group = document.getElementById('group_input').value;
	let email = document.getElementById('email_input').value;

	if(person == ''){
		alert('(JS)- ПІБ не може бути пустим');
		return false;
	}

	if(yob < 1960 || yob > 2004){
		alert('(JS)- Помилка. дата народження повинна бути \nв інтервалі 1960-2004');
		return false;
	}

	if(email == ''){
		alert('(JS)- E-mail не може бути пустим');
		return false;
	}

	if(group == ''){
		alert('(JS)- Група не може бути пустим');
		return false;
	}

	if(!pib_p.test(person)){
		alert('(JS)- Прізвище Ім\'я по Батькові записувати українською мовою.');
		return false;
	}

	if(!group_p.test(group)){
		alert('(JS)- Номер групи заповнювати згідно вашої реальної групи.');
		return false;
	}

	if(!email_p.test(email)){
		alert('(JS)- E-mail вказувати реальний, через який ви будете отримувати інформацію.');
		return false;
	}

	else {
		let formData = new FormData(document.querySelector('.form_ochka'));
        var request = new XMLHttpRequest();
        request.open("POST", "./phplist.php");
        request.onload = function () {
            alert(this.responseText);
        }
        request.send(formData);
    	return false;
	}
};


		