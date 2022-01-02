const hiddenLi = document.querySelector('.menu-hidden');
const liClick = document.querySelector('.menu');
liClick.addEventListener('click', function() {
    if (hiddenLi.style.display == 'block') {
        hiddenLi.style.display = 'none';
    }
    hiddenLi.style.display = 'block';
});