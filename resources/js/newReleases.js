// Definimos los elementos del DOM

const newReleases = document.getElementById('new-releases');
const upcoming = document.getElementById('upcoming');
const forwardButton = document.getElementById('forwards-button');
const backwardsButton = document.getElementById('backwards-button');

// Definimos las funciones que eliminan clases de las variables

const removeClass = () => {
    if(screen.width <= 1850) {
        newReleases.classList.remove('transformReleasesEvenReverse');
        newReleases.classList.remove('transformReleasesEven');
        newReleases.classList.remove('transformReleasesOddReverse');
        newReleases.classList.remove('transformReleasesOdd');
    
        upcoming.classList.remove('transformUpcomingEvenReverse');
        upcoming.classList.remove('transformUpcomingEven');
        upcoming.classList.remove('transformUpcomingOddReverse');
        upcoming.classList.remove('transformUpcomingOdd');
    } else {
        newReleases.classList.remove('transformReleasesEvenReverseBig');
        newReleases.classList.remove('transformReleasesEvenBig');
        newReleases.classList.remove('transformReleasesOddReverseBig');
        newReleases.classList.remove('transformReleasesOddBig');

        upcoming.classList.remove('transformUpcomingEvenReverseBig');
        upcoming.classList.remove('transformUpcomingEvenBig');
        upcoming.classList.remove('transformUpcomingOddReverseBig');
        upcoming.classList.remove('transformUpcomingOddBig');
    }
}

// Definimos las funciones que se activan con el click de los botones y realizan la animación

let j = 1;

const forwardMove = () => {
    if (j % 2 !== 0) {
        removeClass();
        if(screen.width <= 1850) {
            newReleases.classList.add('transformReleasesOdd');
            upcoming.classList.add('transformUpcomingOdd');
        } else {
            newReleases.classList.add('transformReleasesOddBig');
            upcoming.classList.add('transformUpcomingOddBig');
        }
    } else {
        removeClass();
        if(screen.width <= 1850) {
            newReleases.classList.add('transformReleasesEven');
            upcoming.classList.add('transformUpcomingEven');
        } else {
            newReleases.classList.add('transformReleasesEvenBig');
            upcoming.classList.add('transformUpcomingEvenBig');
        }
    }
    j += 1;
}

const backwardsMove = () => {
    if (j % 2 !== 0) {
        removeClass();
        if(screen.width <= 1850) {
            newReleases.classList.add('transformReleasesOddReverse');
            upcoming.classList.add('transformUpcomingOddReverse');
        } else {
            newReleases.classList.add('transformReleasesOddReverseBig');
            upcoming.classList.add('transformUpcomingOddReverseBig');
        }
    } else {
        removeClass();
        if(screen.width <= 1850) {
            newReleases.classList.add('transformReleasesEvenReverse');
            upcoming.classList.add('transformUpcomingEvenReverse');
        } else {
            newReleases.classList.add('transformReleasesEvenReverseBig');
            upcoming.classList.add('transformUpcomingEvenReverseBig');
        }
    }
    j += 1;
}

// Añadimos los escuchadores de eventos a cada botón

forwardButton.addEventListener('click', forwardMove);
backwardsButton.addEventListener('click', backwardsMove);