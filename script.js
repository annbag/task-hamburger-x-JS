const nav = document.querySelector('nav')
document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('active');	
}) 

// const arrow = document.querySelector('.arrow');
// const nav = document.querySelector('nav');

// arrow.addEventListener('click', function() {
// 	arrow.classList.toggle('on');
// 	nav.classList.toggle('on');
// })