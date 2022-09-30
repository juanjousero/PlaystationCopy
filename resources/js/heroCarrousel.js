// Definimos las variables que vienen del DOM

const hero = document.getElementById('hero');
const heroImage = document.getElementById('hero-img');
const mainBanner = document.getElementById('legacy');
const bannerImage = document.getElementById('banner-image');
const bannerTitle = document.getElementById('banner-h2');
const bannerParagraph = document.getElementById('banner-p');

const heroLegacy = document.querySelector('.hero-legacy');
const heroLast = document.querySelector('.hero-last');
const heroDualsense = document.querySelector('.hero-dualsense');
const heroInscryption = document.querySelector('.hero-inscryption');
const heroSaints = document.querySelector('.hero-saints');

const obtainMoreInfoButton = document.querySelectorAll('.obtain-more-info');

// Definimos el array con las rutas a las imágenes que se mostrarán en el banner

const bannerImageSrc = ['./resources/images/hogwarts-legacy.png', './resources/images/playstation-plus.png', './resources/images/call-duty.png', './resources/images/NHL23.png', './resources/images/genshin.png'];
const bannerTextSrc = ['./resources/images/legacy-fonts.png', './resources/images/last-of-us-text.png', './resources/images/.png', './resources/images/inscryption.png', './resources/images/saints-row-text.png'];
const bannerH2 = ['Vive la historia nunca escrita', 'Ya disponible', 'Perfecciona Tu Estilo De Juego', 'Una odisea de cartas oscura como la tinta.', 'Bienvenido a Santo Ileso'];
const bannerP = ['Decide el destino del mundo de los magos en el inmersivo juego de acción de mundo abierto Hogwarts Legacy, ya disponible para reservar en PS4 y PS5',
'Revive el querido juego que lo empezó todo: renovado para PS5',
'Gana ventaja en tu estilo de juego al crear tus propios controles personalizados para encajar con tu estilo de juego con el mando inalámbrico DualSense EdgeTM.',
'Inscryption mezcla elementos de roguelike de construcción de barajas, rompecabezas tipo escape room y terror psicológico en una aventura indie oscura.',
'Saints Row ya está disponible en PS4 y PS5, incluye trabajos extra emocionantes, empresas criminales y misiones exitosas.'];
const heroGrid = [heroLegacy, heroLast, heroDualsense, heroInscryption, heroSaints];

// Añadimos la clase que contiene la animación del CSS

const addingClassList = () => {
    heroImage.classList.add('animationHero');
    bannerImage.classList.add('animationHeroImage');
    bannerTitle.classList.add('animationHeroTitle');
    bannerParagraph.classList.add('animationHeroParagraph');
    obtainMoreInfoButton[0].classList.add('animationHeroParagraph');
}

// Eliminamos la clase que contiene la animación para que funcione correctamente el carrusel

const removingClassList = () => {
    heroImage.classList.remove('animationHero');
    bannerImage.classList.remove('animationHeroImage');
    bannerTitle.classList.remove('animationHeroTitle');
    bannerParagraph.classList.remove('animationHeroParagraph');
    obtainMoreInfoButton[0].classList.remove('animationHeroParagraph');
}

// Definimos un índice para el carrusel y lo ejecutamos

let index = 1;

const manageBanner = () => {
    if(index === 0) {
        heroGrid[4].style.border = 'none';
        heroGrid[4].style.outline = "none";    
        heroGrid[4].style.opacity = '0.5';
    } else {
        heroGrid[index-1].style.border = 'none';
        heroGrid[index-1].style.outline = "none";
        heroGrid[index-1].style.opacity = '0.5';
    }
    addingClassList(index);
    heroImage.style.backgroundImage = 'url(' + bannerImageSrc[index] + ')';
    if(index === 2) {
        bannerImage.alt = '';
    }
    bannerImage.src = bannerTextSrc[index];
    bannerTitle.innerHTML = bannerH2[index];
    bannerParagraph.innerHTML = bannerP[index];
    heroGrid[index].style.border = "3px solid white";
    heroGrid[index].style.outline = "3px solid rgb(44, 113, 197)";
    heroGrid[index].style.opacity = '1';
    if (index > 3) {
        index = 0;
    } else {
        index++;
    }
    setTimeout(() => {
        removingClassList();
    }, 2800);
};

// Hay que mejorar la función que cambia la opacidad al hacer hover

/*const changeOpacity = (event) => {
    event.target.style.opacity = '1';
    console.log('opacity');
    setTimeout(() => {
        event.target.style.opacity = '0.5';
    }, 500)
}*/

// Creamos event listeners para cada imagen del grid

/*const eventListenersHeroGrid = () => {
    heroGrid.map((element) => {
        element.addEventListener('mouseover', changeOpacity);
    })
}*/

// Ejecutamos las funciones cuando se carga por primera vez la web

setInterval(manageBanner, 4500);
//eventListenersHeroGrid();