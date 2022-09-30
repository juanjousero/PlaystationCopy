// Definimos las variables del DOM

const blog = document.getElementById('blog');
const blogCardChoice = document.querySelector('.choice');
const blogCardLast = document.querySelector('.last-of-us');
const blogCardSteel = document.querySelector('.steelrising');
const blogCardWindfolk = document.querySelector('.windfolk');
const blogCards = document.getElementsByClassName('blog-card');
const blogCardsArray = Array.from(blogCards);

const leftButton = document.getElementById('left-button-carrousel');
const rightButton = document.getElementById('right-button-carrousel');

const progressBar = document.getElementsByClassName('bar');
const progressBarArray = Array.from(progressBar);

// Animaciones para el click derecho

const backwardAnimation1 = 'blogCardBackwardsAnimation1';
const backwardAnimation2 = 'blogCardBackwardsAnimation2';
const backwardAnimation3 = 'blogCardBackwardsAnimation3';
const backwardAnimation4 = 'blogCardBackwardsAnimation4';
const backwardAnimation5 = 'blogCardBackwardsAnimation5';
const backwardAnimation6 = 'blogCardBackwardsAnimation6';
const backwardAnimation7 = 'blogCardBackwardsAnimation7';
const backwardAnimation8 = 'blogCardBackwardsAnimation8';
const backwardAnimation9 = 'blogCardBackwardsAnimation9';
let backwardsClassArray = [backwardAnimation1,backwardAnimation2,backwardAnimation3,backwardAnimation4,backwardAnimation5,backwardAnimation6,backwardAnimation7,backwardAnimation8,backwardAnimation9];

// Animaciones para el click izquierdo

const forwardAnimation1 = 'blogCardBackwardsAnimation1Reverse';
const forwardAnimation2 = 'blogCardBackwardsAnimation2Reverse';
const forwardAnimation3 = 'blogCardBackwardsAnimation3Reverse';
const forwardAnimation4 = 'blogCardBackwardsAnimation4Reverse';
const forwardAnimation5 = 'blogCardBackwardsAnimation5Reverse';
const forwardAnimation6 = 'blogCardBackwardsAnimation6Reverse';
const forwardAnimation7 = 'blogCardBackwardsAnimation7Reverse';
const forwardAnimation8 = 'blogCardBackwardsAnimation8Reverse';
const forwardAnimation9 = 'blogCardBackwardsAnimation9Reverse';
const forwardAnimation10 = 'blogCardBackwardsAnimation10Reverse';
let forwardsClassArray = [forwardAnimation1,forwardAnimation2,forwardAnimation3,forwardAnimation4,forwardAnimation5,forwardAnimation6,forwardAnimation7,forwardAnimation8,forwardAnimation9,forwardAnimation10];

let clicks = 0;


// Definimos las funciones de los movimientos
const addClass = (item, animationClass) => {
    item.classList.add(animationClass);
}

const modifyProgressBar = (index) => {
    progressBarArray.forEach((element) => {
        element.style.backgroundColor = 'rgb(204,204,204)'
    })
    progressBarArray[index].style.backgroundColor = 'rgb(4,113,197)';
}

const backwardMovement = () => {
    switch (clicks) {
        case 0:
            blogCardChoice.classList.remove(forwardAnimation3);
            blogCardLast.classList.remove(forwardAnimation3);
            blogCardSteel.classList.remove(forwardAnimation8);
            blogCardWindfolk.classList.remove(forwardAnimation3);

            blogCardChoice.classList.remove(backwardAnimation3);
            blogCardLast.classList.remove(backwardAnimation3);
            blogCardSteel.classList.remove(backwardAnimation8);
            blogCardWindfolk.classList.remove(backwardAnimation9);

            blogCardsArray.forEach((element) => {
                addClass(element, backwardAnimation1);
            });
            
            modifyProgressBar(clicks+1);
            clicks++;
            break;
        case 1:
            blogCardChoice.classList.remove(forwardAnimation10);
            blogCardLast.classList.remove(forwardAnimation4);
            blogCardSteel.classList.remove(forwardAnimation6);
            blogCardWindfolk.classList.remove(forwardAnimation6);

            blogCardsArray.forEach((element) => {
                element.classList.remove(backwardAnimation1);
            })

            addClass(blogCardChoice, backwardAnimation5);
            blogCardsArray.forEach((element) => {
                if (element !== blogCardChoice) {
                    addClass(element, backwardAnimation2);
                }
            })
            modifyProgressBar(clicks+1);
            clicks++;
            break;
        case 2:
            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk && element !== blogCardSteel) {
                    element.classList.remove(forwardAnimation2);
                } else if (element == blogCardWindfolk) {
                    element.classList.remove(forwardAnimation7);
                } else {
                    element.classList.remove(forwardAnimation5);
                }
            })

            blogCardsArray.forEach((element) => {
                if (element !== blogCardChoice) {
                    element.classList.remove(backwardAnimation2);
                }
            })
            modifyProgressBar(clicks+1);
            blogCardChoice.classList.remove(backwardAnimation5);

            addClass(blogCardChoice, backwardAnimation6);
            addClass(blogCardLast, backwardAnimation4);
            addClass(blogCardSteel, backwardAnimation7);
            addClass(blogCardWindfolk, backwardAnimation7);
            clicks++;
            break;
        case 3:
            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk) {
                    element.classList.remove(forwardAnimation1);
                } else {
                    element.classList.remove(forwardAnimation9);
                }
            })

            blogCardChoice.classList.remove(backwardAnimation6);
            blogCardLast.classList.remove(backwardAnimation4);
            blogCardSteel.classList.remove(backwardAnimation7);
            blogCardWindfolk.classList.remove(backwardAnimation7);

            addClass(blogCardChoice, backwardAnimation3);
            addClass(blogCardLast, backwardAnimation3);
            addClass(blogCardSteel, backwardAnimation8);
            addClass(blogCardWindfolk, backwardAnimation9);
            modifyProgressBar(0);
            clicks = 0;
            break;
    }
}

const forwardMovement = () => {
    switch (clicks) {
        case 0:
            blogCardChoice.classList.remove(backwardAnimation3);
            blogCardLast.classList.remove(backwardAnimation3);
            blogCardSteel.classList.remove(backwardAnimation8);
            blogCardWindfolk.classList.remove(backwardAnimation9);

            blogCardChoice.classList.remove(forwardAnimation3);
            blogCardLast.classList.remove(forwardAnimation3);
            blogCardSteel.classList.remove(forwardAnimation8);
            blogCardWindfolk.classList.remove(forwardAnimation3);

            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk) {
                    addClass(element, forwardAnimation1);
                } else {
                    addClass(element, forwardAnimation9);
                }
            });
            modifyProgressBar(3);
            clicks = 3;
            break;
        case 1:
            blogCardsArray.forEach((element) => {
                element.classList.remove(backwardAnimation1);
            })

            blogCardChoice.classList.remove(forwardAnimation10);
            blogCardLast.classList.remove(forwardAnimation4);
            blogCardSteel.classList.remove(forwardAnimation6);
            blogCardWindfolk.classList.remove(forwardAnimation6);

            addClass(blogCardChoice, forwardAnimation3);
            addClass(blogCardLast, forwardAnimation3);
            addClass(blogCardSteel, forwardAnimation8);
            addClass(blogCardWindfolk, forwardAnimation3);
            modifyProgressBar(clicks-1);
            clicks--;
            break;
        case 2:
            blogCardsArray.forEach((element) => {
                if (element !== blogCardChoice) {
                    element.classList.remove(backwardAnimation2);
                }
            })
            blogCardChoice.classList.remove(backwardAnimation5);

            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk && element !== blogCardSteel) {
                    element.classList.remove(forwardAnimation2);
                } else if (element == blogCardWindfolk) {
                    element.classList.remove(forwardAnimation7);
                } else {
                    element.classList.remove(forwardAnimation5);
                }
            })

            addClass(blogCardChoice, forwardAnimation10);
            addClass(blogCardLast, forwardAnimation4);
            addClass(blogCardSteel, forwardAnimation6);
            addClass(blogCardWindfolk, forwardAnimation6);
            modifyProgressBar(clicks-1);
            clicks--;
            break;
        case 3:
            blogCardChoice.classList.remove(backwardAnimation6);
            blogCardLast.classList.remove(backwardAnimation4);
            blogCardSteel.classList.remove(backwardAnimation7);
            blogCardWindfolk.classList.remove(backwardAnimation7);

            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk) {
                    element.classList.remove(forwardAnimation1);
                } else {
                    element.classList.remove(forwardAnimation9);
                }
            })
            blogCardsArray.forEach((element) => {
                if (element !== blogCardWindfolk && element !== blogCardSteel) {
                    addClass(element, forwardAnimation2);
                } else if (element == blogCardWindfolk) {
                    addClass(element, forwardAnimation7);
                } else {
                    addClass(element, forwardAnimation5);
                }
            })
            modifyProgressBar(clicks-1);
            clicks--;
            break;
    }
}

// Añadimos escuchadores de eventos a los botones

leftButton.addEventListener('click', forwardMovement);
rightButton.addEventListener('click', backwardMovement);