const button_phone_call = document.getElementsByClassName('header-p-regular')[0];
const form = document.getElementsByClassName('form-window');
const overlay_background = document.getElementsByClassName('overlay-background')[0];
const overlay_close = document.getElementsByClassName('form-overlay-close')[0];
const body = document.getElementsByTagName('body')[0];
const phone_number = document.getElementById('header-phone-number');

function openFormWindow() {
	form[0].classList.add('_active');
	overlay_background.classList.add('_active-overlay-background');
	overlay_close.classList.add('_active-overlay-close');
	body.classList.add('overflow-hidden');
	form[0].classList.remove('hidden');
}

button_phone_call.addEventListener('click', openFormWindow);

overlay_close.addEventListener('click', () => {
	form[0].classList.remove('_active');
	form[1].classList.add('hidden');
	overlay_background.classList.remove('_active-overlay-background');
	overlay_close.classList.remove('_active-overlay-close');
	body.classList.remove('overflow-hidden');
});

function formIsSubmitted() {
	form[0].classList.add('hidden');
	form[1].classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
	function moveElement() {
		const viewportWidth = window.innerWidth;
		if (viewportWidth <= 1024) {
			phone_number.addEventListener('click', openFormWindow);
		} else {
			phone_number.removeEventListener('click', openFormWindow);
		}
	}
		
	moveElement();
	
	window.addEventListener('resize', moveElement);
 });