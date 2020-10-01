'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	/*isNaN срабатывает, если в переменную попадают не числа. */
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {}, /* расходы */
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

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

/* расчет дневного бюджета */
function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(2);

	alert(`Ежедневный бюджет: ${appData.moneyPerDay}.`);
}

detectDayBudget();

/* расчетом уровня достатка */
function detectLevel() {
	if(appData.moneyPerDay < 5) {
		alert('Ты бомжара.');
	} else if (appData.moneyPerDay > 4 && appData.moneyPerDay < 11) {
		alert('Ты нищеброд.');
	} else if (appData.moneyPerDay > 9 && appData.moneyPerDay < 16) {
		alert('Ты не богат.');
	} else if (appData.moneyPerDay > 14 && appData.moneyPerDay < 21) {
		alert('Ты нормас.');
	} else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 25) {
		alert('Ты средняк.');
	} else {
		alert('Ну ты крут!');
	}
}

detectLevel();

/* функция для определения необязательных расходов */
function chooseOptExpenses() {
	for (let fary = 0; fary < 3; fary++) {
		appData.optionalExpenses[fary] = fary + ' - ' + prompt('Статься необязательных расходов?');
	}
}

chooseOptExpenses();

document.write(appData.optionalExpenses[0]);
document.write(appData.optionalExpenses[1]);
document.write(appData.optionalExpenses[2]);

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = save/100/12*percent;
		alert('Доход в месц с деопозита: ' + appData.monthIncome);
	}
}

checkSavings();