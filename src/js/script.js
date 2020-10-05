'use strict';

let money, time;

function start() {
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	/*isNaN срабатывает, если в переменную попадают не числа. */
	time = +prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
	budget: money,
	expenses: {}, /* расходы */
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	/* обязательные расходы */
	chooseExpenses: function() { 
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
	},
	/* дневной бюджет */
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);

		alert(`Ежедневный бюджет: ${appData.moneyPerDay}.`);
	},
	/* оценка уровня достатка */
	detectLevel: function() {
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
	},
	/* проверка накоплений */
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');
	
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месц с деопозита: ' + appData.monthIncome);
		}
	},
	/* выбор необязательных расходов */
	chooseOptExpenses: function() {
		for (let fary = 0; fary < 3; fary++) {
			appData.optionalExpenses[fary] = fary + ' - ' + prompt('Статься необязательных расходов?');
			console.log(appData.optionalExpenses);
		}
	},
	/* перечисление способов дополнительного дохода */
	chooseIncome: function() {
		while(typeof(items) != 'string' || items == '' || typeof(items) == null){
			items = prompt('Перечислите через запятую, что принесёт дополнительный доход?', '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Может ещё шото?'));
		appData.income.sort();
		appData.income.forEach(function(a, b){
			alert(`Способы доп.заработка: ${b + 1} - ${a}`);
		});
	}
};

for (let neko in appData) {
	console.log(`Наша программа включает в себя данные: ${neko} = ${appData[neko]}`);
}