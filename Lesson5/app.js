//                               1 Задание

// const containsOnlyDigits = (str) => {
// 	const regExp = /^\d+$/
// 	return regExp.test(str)
// }

// console.log(containsOnlyDigits("123456"));
// console.log(containsOnlyDigits("1234dfbr56"));

//                               2 Задание

// let num = 0

// const secondPassed = () => {
// 	num++
// 	console.log("Прошла секунда: ",num);
// }

// setInterval(secondPassed, 1000)

//                               3 Задание

// let seconds = 0

// const interval = setInterval(() => {
// 	console.log("Прошла секунда: ", seconds);
// 	seconds++
// 	if(seconds > 10){
// 		clearInterval(interval)
// 	}
// }, 1000)

//                               4 Задание

// const block = document.getElementById('myBlock');

// block.addEventListener('click', () => {
// 	block.classList.toggle('colored');
// });

//                               5 Задание

// const xhr = new XMLHttpRequest();
// const url = './main.json';

// xhr.open('GET', url, true);

// xhr.onload = function() {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//     } else {
//         console.log('Request failed with status:', xhr.status);
//     }
// };

// xhr.onerror = function() {
//     console.error('Request failed');
// };

// xhr.send();
