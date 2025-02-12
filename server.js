let num1 = document.getElementById('btn1')
let num2 = document.getElementById('btn2')
let num3 = document.getElementById('btn3')
let num4 = document.getElementById('btn4')
let num5 = document.getElementById('btn5')
let num6 = document.getElementById('btn6')
let num7 = document.getElementById('btn7')
let num8 = document.getElementById('btn8')
let num9 = document.getElementById('btn9')
let num0 = document.getElementById('btn0')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let times = document.getElementById('times')
let dives = document.getElementById('dives')
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')
let display = document.getElementById('display')

let firstNumber = ''
let lastNumber = ''
let operation = undefined

num1.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num1.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num1.textContent
		display.value = `${lastNumber}`
	}
})

num2.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num2.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num2.textContent
		display.value = `${lastNumber}`
	}
})

num3.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num3.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num3.textContent
		display.value = `${lastNumber}`
	}
})

num4.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num4.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num4.textContent
		display.value = `${lastNumber}`
	}
})

num5.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num5.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num5.textContent
		display.value = `${lastNumber}`
	}
})

num6.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num6.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num6.textContent
		display.value = `${lastNumber}`
	}
})

num7.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num7.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num7.textContent
		display.value = `${lastNumber}`
	}
})

num8.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num8.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num8.textContent
		display.value = `${lastNumber}`
	}
})

num9.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num9.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num9.textContent
		display.value = `${lastNumber}`
	}
})

num0.addEventListener('click', function () {
	if (operation == undefined) {
		firstNumber = firstNumber + num0.textContent
		display.value = `${firstNumber}`
	} else {
		lastNumber = lastNumber + num0.textContent
		display.value = `${lastNumber}`
	}
})

plus.addEventListener('click', function () {
	operation = '+'
	lastNumber = ''
	display.value = '|'
})

minus.addEventListener('click', function () {
	operation = '-'
	lastNumber = ''
	display.value = '|'
})

times.addEventListener('click', function () {
	operation = '*'
	lastNumber = ''
	display.value = '|'
})
dives.addEventListener('click', function () {
	operation = '/'
	lastNumber = ''
	display.value = '|'
})
equals.addEventListener('click', function () {
	display.value = eval(`${firstNumber}${operation}${lastNumber}`)
	firstNumber = display.value
})
