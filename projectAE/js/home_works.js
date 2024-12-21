//                                   GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailRusult = document.querySelector('#gmail_result');

// const regExp = /^[a-zA-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
const regExp = /^[a-zA-Z\0-9._-]+@gmail.com$/

gmailButton.onclick = () => {
	if (regExp.test(gmailInput.value)) {
		gmailRusult.innerHTML = 'Successfully Registered'
		gmailRusult.style.color = 'green'
	} else {
		gmailRusult.innerHTML = 'Incorrect gmail address'
		gmailRusult.style.color = 'red'
	}
}

//                                  MOVE BLOCK

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0, positionY = 0;
const speed = 4;

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
  if (positionX < maxWidth && positionY === 0) {
    positionX += speed;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX >= maxWidth && positionY < maxHeight) {
    positionY += speed;
    childBlock.style.top = `${positionY}px`;
  } else if (positionY >= maxHeight && positionX > 0) {
    positionX -= speed;
    childBlock.style.left = `${positionX}px`;
  } else if(positionX <= 0 && positionY > 0) {
    positionY -= speed;
    childBlock.style.top = `${positionY}px`;
  }
  requestAnimationFrame(moveBlock);
}
moveBlock()

//                                STOPWATCH

const seconds = document.querySelector('#seconds');
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonReset = document.querySelector('#reset');

let num = 0;
let time = null

buttonStart.onclick = () => {
	if (!time) {
		time = setInterval (() => {
			num++
			seconds.innerHTML = num;
		}, 1000);
	}
}

buttonStop.onclick = () => {
	clearInterval(time)
	time = null
}

buttonReset.onclick = () => {
	num = 0;
	time = null
	seconds.innerHTML = num
	clearInterval(time)
}

//                                 CHARACTERS

const charactersList = document.querySelector('.characters-list')

const createCharactersCards = () => {
	const request = new XMLHttpRequest()
	request.open('GET', '../data/characters.json')
	request.setRequestHeader('Content-type', 'application/json')
	request.send()

	request.onload = () => {
		const information = JSON.parse(request.response)
		information.forEach(character => {
			const characterCard = document.createElement('div')
			characterCard.classList.add('character-card')

			characterCard.innerHTML = `
				<h2>${character.name}</h2>
				<h4>from: ${character.from}</h4>
				<img src="${character.person_photo}" alt="${character.name}"/>
			`
			charactersList.append(characterCard)
		})
	}
}

createCharactersCards()

//                                     2 Exercise

const justRequest = new XMLHttpRequest()
justRequest.open('GET', '../data/any.json')
justRequest.setRequestHeader('Content-type', 'application/json')
justRequest.send()

justRequest.onload = () => {
	console.log(justRequest.response);
}









