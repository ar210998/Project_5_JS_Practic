'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {}, /* расходы */
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let ai = 0; ai < 2; ai++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');
	
	if (typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 15) {
		console.log('Успех');
		appData.expenses[a] = b;
	} else {
		ai--;
	}
}
/* let ai = 0; */
/* while (ai < 2) {
	ai++;
	let a = prompt('Введите обязательную статью расходов', ''),
	b = prompt('Во сколько обойдётся?', '');
	if (typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 15) {
		console.log('Gut');
		appData.expenses[a] = b;
	} else {
		ai--;
	}
} */
/* do {
	ai++;
	let a = prompt('Введите обязательную статью расходов', ''),
	b = prompt('Во сколько обойдётся?', '');
	if (typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 15) {
		console.log('Gut');
		appData.expenses[a] = b;
	} else {
		ai--;
	}
} while (ai < 2) */

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 5) {
	console.log('Бомжара.');
} else if (appData.moneyPerDay > 4 && appData.moneyPerDay < 11) {
	console.log('Нищеброд.');
} else if (appData.moneyPerDay > 9 && appData.moneyPerDay < 16) {
	console.log('Не богач');
} else if (appData.moneyPerDay > 14 && appData.moneyPerDay < 21) {
	console.log('Норм');
} else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 25) {
	console.log('Средняк');
} else {
	console.log('Ну ты крут');
}