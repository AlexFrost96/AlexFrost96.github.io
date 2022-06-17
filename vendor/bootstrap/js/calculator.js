$(document).ready(function() { // Ждём загрузки страницы	   
	
	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		var first = $("input[name=first]").val() * 1; // Переменная первого числа
		var second = $("input[name=second]").val() * 1; // Переменная второго числа
		var action = $("select[name=action]").val();
		var result; // Переменная результата
		if (action == 'Купити') { // Если действие - сложение
			result = (first * second)*0.00045;
		}
		else if (action == 'Покупка + монтаж'){ // Если действие вычитание
			result = (first * second)*0.00045 + 350;
		}
		$("input[name=result]").val(result); // записываем результат
	});
});