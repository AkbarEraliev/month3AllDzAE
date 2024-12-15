//           PHONE BLOCK

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = 'Ok';
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerHTML = 'Invalid phone number'
		phoneResult.style.color = 'red'
	}
}

// TAB SLIDER

const tab_content_blocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
	tab_content_blocks.forEach((item) => {
		item.style.display = 'none'
	})
	tabs.forEach((item) => {
		item.classList.remove('tab_content_item_active')
	})
}

const showTabContent = (index = 0) => {
	tab_content_blocks[index].style.display = 'block'
	tabs[index].classList.add('tab_content_item_active')
	
}

let plusIndex = 0

const autoTabs = () => {
	hideTabContent()
	showTabContent(plusIndex)
	plusIndex = (plusIndex + 1) % tabs.length;
}

let autoInterval = setInterval(autoTabs, 3000);

tabsParent.onclick = (event) => {
	if (event.target.classList.contains('tab_content_item')) {
		plusIndex = [...tabs].indexOf(event.target)
		hideTabContent()
		showTabContent(plusIndex)

		clearInterval(autoInterval)
		autoInterval = setInterval(autoTabs, 3000)
	}
}

hideTabContent()
showTabContent(plusIndex)