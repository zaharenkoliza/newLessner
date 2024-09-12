const button_phone_call = document.getElementsByClassName('header-p-regular')[0];
const form = document.getElementsByClassName('form-window')[0];
const overlay_background = document.getElementsByClassName('overlay-background')[0];
const overlay_close = document.getElementsByClassName('form-overlay-close')[0];

button_phone_call.addEventListener('click', () => {
	console.log('s');
	form.classList.add('_active');
	overlay_background.classList.add('_active-overlay-background');
	overlay_close.classList.add('_active-overlay-close');
	console.log(overlay_background.classList);
});

overlay_close.addEventListener('click', () => {
	form.classList.remove('_active');
	overlay_background.classList.remove('_active-overlay-background');
	overlay_close.classList.remove('_active-overlay-close');
});