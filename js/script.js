"use stript";


// let message = "Привет";
// let number = 5;

// if (number > 50) {
// 	console.log('5 больше 50');
// } else if (number > 30) {
// 	console.log('5 больше 30');
// } else if (number > 10) {
// 	console.log('5 больше 10');
// } else if (number > 1) {
// 	console.log('5 больше 1');
// } else {
// 	console.log('Условие не выполнено :(');
// }

//=========================================IF ELSE в JAVASCRIPT. Условный оператор "?". Примеры IF ELSE=========================

//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}

//=============================================Циклы FOR и WHILE в JavaScript. Директивы break и continue====================================

let num = 1;
while (num < 8) {
	console.log(num);
	num++;
}

let numm = 0; while (numm < 6) {
	console.log(`Число: ${numm}`); numm++;
}

firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

//==============================================Числа в JAVASCRIPT. Тип данных number====================================

// задача №1
let numOne = 1.005 + Number.EPSILON;
let numb = Math.round(numOne * 100) / 100;
console.log(numb);

// задача №2
let value = parseFloat("135.58px");
console.log(value);

//задача №3
let values = 58 + "Фрілансер";
if (isNaN(values)) {
	console.log('Результат NaN');
}

// задача №4
console.log(Math.max(10, 58, 39, -150, 0))

//задача №5
console.log(Math.floor(58.858))

//===============================================Строки в JAVASCRIPT. Тип данных string.=================================

// Задача 2 отримати символ "н" з рядка фрілансер
let word = 'фрілансер';
let symbol = word[5];
console.log(symbol);

// Задача №3. Верно?
let textt = 123 + "456";
//Ожидаем 579
console.log(textt);

// Задача 4 рядок в верхньому регістрі
let wordUpper = "фрілансер";
console.log(wordUpper.toUpperCase());

// Задача 5 отримати підстроку лан

let words = "фрілансер";
console.log(words.slice(3, 6));

//Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));