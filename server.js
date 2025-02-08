let text = prompt('sozlar yozing, vergul bilan')

function reverseWord(str) {
	let arr = str.split(' ')
	let newArr = arr.reverse()
	return newArr.join(' ')
}
console.log(reverseWord(text))
