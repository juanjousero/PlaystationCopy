// Definimos las variables del DOM

const ps5Image = document.getElementById('ps5-img');
const ps5BannerTitle = document.querySelector('.ps5-banner-title');
const ps5BannerParagraph = document.querySelector('.ps5-banner-paragraph');
const ps5Options = document.getElementsByClassName('ps5-grid-img');

// Definimos los array que continene todas las alternativas

const ps5ImageArray = ['file:///Users/juanjo/Desktop/Juanjo/Cursos/Front-End%20Engineer/Proyectos/Personal/Playstation%20copy/resources/images/playstation5.png', 
'file:///Users/juanjo/Desktop/Juanjo/Cursos/Front-End%20Engineer/Proyectos/Personal/Playstation%20copy/resources/images/dualsense.png', 
'file:///Users/juanjo/Desktop/Juanjo/Cursos/Front-End%20Engineer/Proyectos/Personal/Playstation%20copy/resources/images/headset.png', 
'file:///Users/juanjo/Desktop/Juanjo/Cursos/Front-End%20Engineer/Proyectos/Personal/Playstation%20copy/resources/images/ps5-covers.png'];
const ps5TitleArray = ['Consola PlayStation 5', 'Mando inalámbrico DualSense', 'Auriculares inalámbricos PULSE 3D',
'Cubiertas de consola PS5'];
const ps5ParagraphArray = ['Vive la experiencia de toda una nueva generación de increíbles juegos de PlayStation.',
'Sumérgete aún más en la experiencia de juego gracias a un mando con retroalimentación háptica y gatillos adaptativos que crean efectos dinámicos.',
'Disfruta de una experiencia inalámbrica y fluida con auriculares optimizados para el audio 3D de las consolas PS5.',
'Personaliza tu consola PlayStation 5 o PlayStation 5 edición digital con una llamativa selección de nuevos colores.'];

// Definimos la función que cambia las imágenes y los textos

const changeElement = (event) => {
    let index = ps5ImageArray.indexOf(event.target.src); 
    ps5Image.src = event.target.src;
    ps5BannerTitle.innerHTML = ps5TitleArray[index];
    ps5BannerParagraph.innerHTML = ps5ParagraphArray[index];
    Array.from(ps5Options).forEach((item) => {
        item.style.border = 'none';
        item.style.opacity = '0.5';
    })
    ps5Options[index].style.border = "3px solid rgb(44, 113, 197)";
    ps5Options[index].style.opacity = "1";
}


// Añadimos eventos de clicado sobre cada imagen

const addingEventListeners = () => {
    Array.from(ps5Options).forEach((item) => {
        item.addEventListener('click', changeElement);
    })
}


// Ejecutamos las funciones al cargarse la web

addingEventListeners();