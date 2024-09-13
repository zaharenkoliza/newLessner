const button_phone_call = document.getElementsByClassName('header-p-regular')[0];
const form = document.getElementsByClassName('form-window');
const overlay_background = document.getElementsByClassName('overlay-background')[0];
const overlay_close = document.getElementsByClassName('form-overlay-close')[0];
const body = document.getElementsByTagName('body')[0];

button_phone_call.addEventListener('click', () => {
	console.log('s');
	form[0].classList.add('_active');
	overlay_background.classList.add('_active-overlay-background');
	overlay_close.classList.add('_active-overlay-close');
	body.classList.add('overflow-hidden');
	form[0].classList.remove('hidden');
});

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