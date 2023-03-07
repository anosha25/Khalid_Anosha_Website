const button = document.querySelector('.open-close');
const menu = document.querySelector('#side-menu');

button.addEventListener('click', function() {
  menu.classList.toggle('active');
});
