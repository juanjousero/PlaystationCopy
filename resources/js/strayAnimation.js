// Definimos las variables del DOM

const stray = document.getElementById('stray');
const strayBox = document.getElementById('stray-box');
const strayLogo = document.querySelector('.stray-logo');
const strayTitle = document.querySelector('.stray-title');
const strayParagraph = document.querySelector('.stray-pragraph');

// Definimos la función que activa la animación de Stray

const addingClassStray = () => {
    stray.classList.add('animationStrayJS');
    strayBox.classList.add('animationStrayBoxJS');
    console.log('Stray');
};

// Definimos el observer que nos indicará cuando se vea el elemento

let observerStray = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        addingClassStray();
    }
});

// Indicamos que el observer vea cuando intersecta el elemento

observerStray.observe(stray);