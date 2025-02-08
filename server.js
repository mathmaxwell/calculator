let text = prompt('kotta harf qilib beradi')

function capitalize(str) {
	let arr = str.split(' ')
	let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1))
	return newArr.join(' ')
}
console.log(capitalize(text))
