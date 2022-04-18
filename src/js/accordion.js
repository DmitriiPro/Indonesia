const characteristicsListElem = document.querySelector('.info__list');
const characteristicsItemElems = document.querySelectorAll('.info__item');

characteristicsItemElems.forEach(elem => {
	setTimeout(() => {
    	if (elem.children[1].classList.contains('active')) {      
    	elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
    	}
	}, 500);  
});

const open = (button, dropDown) => {
	closeAllDrops(button, dropDown);
	button.ariaExpanded = true;
	dropDown.style.height = dropDown.scrollHeight + 'px';
	button.classList.add('active');
	dropDown.classList.add('active');
};

const close = (button, dropDown) => {
	
	button.ariaExpanded = false;
	button.classList.remove('active');
	dropDown.classList.remove('active');
	dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
	characteristicsItemElems.forEach((elem) => {
		if (elem.children[0] !== button && elem.children[1] !== dropDown) {
		close(elem.children[0], elem.children[1]);
		}
	})
}

characteristicsListElem.addEventListener('click', (event) => {
	const target = event.target;
	if (target.classList.contains('info__button')) {
	const parent = target.closest('.info__item');
	const description = parent.querySelector('.info__text');
	description.classList.contains('active') ?
		close(target, description) :
	open(target, description);
	} 
});