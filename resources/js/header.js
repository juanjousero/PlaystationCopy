// Definimos las variables del DOM

const header = document.getElementById('header');
const stickyHeader = document.getElementById('sony-nav');
const menu = document.getElementById('menu');
const playstationImage = document.getElementById('playstation-logo');
const optionMenu = document.querySelectorAll('.menu-paragraph');
const newSesionButton = document.getElementById('new-session');
const mainDiv = document.querySelector('main');
const downArrows = document.getElementsByClassName('down-arrow');

const gamesMenu = optionMenu[0];
const hardwareMenu = optionMenu[1];
const servicesMenu = optionMenu[2];
const newsMenu = optionMenu[3];
const shopMenu = optionMenu[4];
const asistanceMenu = optionMenu[5];

const headerDivExpanded = document.createElement('div');

let screenWidth = screen.width;

// Definimos la función activada con click en los títulos del header

let expanded = false;

const stylingHeader = (expand) => {
    if (screenWidth > 850) {
        if (expand === false) {
            header.style.height = '2rem';
            header.style.alignItems = 'flex-start';
            header.style.paddingTop = '0.25rem';
            header.style.paddingLeft = '0rem';
            header.style.fontSize = '0.8rem';
            header.style.fontWeight = '400';
            menu.style.marginLeft = '-2.5rem';
        } else {
            header.style.height = '4rem';
            header.style.alignItems = 'center';
            header.style.paddingTop = '0rem';
            header.style.paddingLeft = '0rem';
            header.style.fontSize = '1rem';
            header.style.fontWeight = '300';
            menu.style.marginLeft = '0rem';
        }
    } else if (screenWidth <= 850 && screenWidth > 450) {
        if (expand === false) {
            header.style.height = '2rem';
            header.style.alignItems = 'flex-start';
            header.style.paddingTop = '0.25rem';
            header.style.paddingLeft = '0rem';
            header.style.fontSize = '0.8rem';
            header.style.fontWeight = '400';
            menu.style.marginLeft = '1.5rem';
        } else {
            header.style.height = '4rem';
            header.style.alignItems = 'center';
            header.style.paddingTop = '0rem';
            header.style.paddingLeft = '0rem';
            header.style.fontSize = '1rem';
            header.style.fontWeight = '300';
            menu.style.marginLeft = '2.5rem';
        }
    } else {
        //
    }
};

const stylingSessionButton = (expand) => {
    if (screenWidth > 850) {
        if (expand === false) {
            newSesionButton.style.width = '7rem';
            newSesionButton.style.height = '1.5rem';
            newSesionButton.style.fontSize = '0.9rem';
        } else {
            newSesionButton.style.width = '8rem';
            newSesionButton.style.height = '2rem';
            newSesionButton.style.fontSize = '1.1rem';
        }
    } else if (screenWidth <= 850 && screenWidth > 450) {
        if (expand === false) {
            newSesionButton.style.width = '6rem';
            newSesionButton.style.height = '1.25rem';
            newSesionButton.style.fontSize = '0.8rem';
        } else {
            newSesionButton.style.width = '7rem';
            newSesionButton.style.height = '1.4rem';
            newSesionButton.style.fontSize = '1rem';
        }
    } else {
        //
    }
    
};

const stylingPlaystationLogo = (expand) => {
    if (screenWidth > 850) {
        if (expand === false) {
            playstationImage.style.width = '2rem';
            playstationImage.style.height = '2rem';
       } else {
            playstationImage.style.width = '3rem';
            playstationImage.style.height = '3rem';
       }     
    } else if (screenWidth <= 850 && screenWidth > 450) {
        if (expand === false) {
            playstationImage.style.width = '2rem';
            playstationImage.style.height = '2rem';
       } else {
            playstationImage.style.width = '3rem';
            playstationImage.style.height = '3rem';
       }   
    } else {
        //
    }
   
}

const stylingHeaderDiv = () => {
    if (!expanded) {
        headerDivExpanded.classList.add('headerDivExpandedAnimation');
        headerDivExpanded.classList.remove('headerDivExpandedAsistanceAnimation');        
    }
    headerDivExpanded.classList.add('headerDivExpanded');
    headerDivExpanded.classList.remove('headerDivExpandedAsistance');
    headerDivExpanded.classList.remove('headerDivExpandedAsistanceAnimation');
};

const appendGamesChilds = (gamesHeaderDiv, gamesHeaderList) => {
    headerDivExpanded.appendChild(gamesHeaderDiv);
    headerDivExpanded.appendChild(gamesHeaderList);
    gamesHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        gamesHeaderDiv.classList.remove('headerGamesAnimationShort');
        gamesHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        gamesHeaderDiv.classList.remove('headerGamesAnimation');
        gamesHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const createGameCards = () => {
    const gamesHeaderCardPS5 = document.createElement('div'); 
    const gamesHeaderCardPS4 = document.createElement('div'); 
    const gamesHeaderCardVR = document.createElement('div'); 
    const gamesHeaderCardPlus = document.createElement('div'); 
    const gamesHeaderCardStore = document.createElement('div'); 

    return gamesArray = [gamesHeaderCardPS5, gamesHeaderCardPS4, gamesHeaderCardVR, gamesHeaderCardPlus, gamesHeaderCardStore];
};

const addClassesGameCards = (gamesArray) => {
    gamesArray[0].classList.add('headerGamesCardPS5');
    gamesArray[0].classList.add('headerGamesCard');
    gamesArray[1].classList.add('headerGamesCardPS4');
    gamesArray[1].classList.add('headerGamesCard');
    gamesArray[2].classList.add('headerGamesCardVR');
    gamesArray[2].classList.add('headerGamesCard');
    gamesArray[3].classList.add('headerGamesCardPLUS');
    gamesArray[3].classList.add('headerGamesCard');
    gamesArray[4].classList.add('headerGamesCardSTORE');
    gamesArray[4].classList.add('headerGamesCard');
};

const createGameList = () => {
    const gamesHeaderList = document.createElement('ul');
    for(let gameIndex = 0; gameIndex <= 4; gameIndex++) {
        gamesHeaderList.appendChild(document.createElement('li'));
    }
    gamesHeaderList.childNodes[0].innerHTML = 'Playstation Indies';
    gamesHeaderList.childNodes[1].innerHTML = 'Juegos para PS4 en PS5';
    gamesHeaderList.childNodes[2].innerHTML = 'Gratuitos';
    gamesHeaderList.childNodes[3].innerHTML = 'Playstation en PC';
    gamesHeaderList.childNodes[4].innerHTML = 'Ofertas y descuentos';

    gamesHeaderList.classList.add('gamesHeaderList');
    if (!expanded) {
        gamesHeaderList.classList.remove('gamesHeaderListAnimationShort');
        gamesHeaderList.classList.add('gamesHeaderListAnimation');
    } else {
        gamesHeaderList.classList.remove('gamesHeaderListAnimation');
        gamesHeaderList.classList.add('gamesHeaderListAnimationShort');
    }

    return gamesHeaderList;
};

const spiningDownArrow = (index) => {
    arrowArray = Array.from(downArrows);
    arrowArray[index].classList.add('spiningArrow');
    let i = 0;
    while(i < arrowArray.length) {
        if (i !== index) {
            arrowArray[i].classList.remove('spiningArrow');
        }
        i++;
    }
}

const appendHardwareChilds = (hardwareHeaderDiv, hardwareHeaderList) => {
    headerDivExpanded.appendChild(hardwareHeaderDiv);
    headerDivExpanded.appendChild(hardwareHeaderList);
    hardwareHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        hardwareHeaderDiv.classList.remove('headerGamesAnimationShort');
        hardwareHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        hardwareHeaderDiv.classList.remove('headerGamesAnimation');
        hardwareHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const createHardwareCards = () => {
    const hardwareHeaderCardPS5 = document.createElement('div'); 
    const hardwareHeaderCardPS4 = document.createElement('div'); 
    const hardwareHeaderCardPS4Pro = document.createElement('div'); 
    const hardwareHeaderCardVR = document.createElement('div'); 

    return hardwareArray = [hardwareHeaderCardPS5, hardwareHeaderCardPS4, hardwareHeaderCardPS4Pro, hardwareHeaderCardVR];
};

const addClassesHardwareCards = () => {
    hardwareArray[0].classList.add('headerGamesCardPS5');
    hardwareArray[0].classList.add('headerGamesCard');
    hardwareArray[1].classList.add('headerGamesCardPS4');
    hardwareArray[1].classList.add('headerGamesCard');
    hardwareArray[2].classList.add('headerHardwareCardPS4Pro');
    hardwareArray[2].classList.add('headerGamesCard');
    hardwareArray[3].classList.add('headerGamesCardVR');
    hardwareArray[3].classList.add('headerGamesCard');
};

const createHardwareList = () => {
    const hardwareHeaderList = document.createElement('ul');
    for (let hardwareIndex = 0; hardwareIndex <= 4; hardwareIndex++) {
        hardwareHeaderList.appendChild(document.createElement('li'));
    }
    hardwareHeaderList.childNodes[0].innerHTML = 'Mando inalámbrico DualSense';
    hardwareHeaderList.childNodes[1].innerHTML = 'Auriculares inalámbricos PULSE 3D';
    hardwareHeaderList.childNodes[2].innerHTML = 'Mando inalámbrico DUALSHOCK 4';
    hardwareHeaderList.childNodes[3].innerHTML = 'Accesorios de PS5 y PS4';
    hardwareHeaderList.childNodes[4].innerHTML = 'Playstation VR2';

    hardwareHeaderList.classList.add('gamesHeaderList');
    if (!expanded) {
        hardwareHeaderList.classList.remove('gamesHeaderListAnimationShort');
        hardwareHeaderList.classList.add('gamesHeaderListAnimation');
    } else {
        hardwareHeaderList.classList.remove('gamesHeaderListAnimation');
        hardwareHeaderList.classList.add('gamesHeaderListAnimationShort');
    }

    return hardwareHeaderList;
}

const createServicesCards = () => {
    const servicesHeaderCardPSPlus = document.createElement('div');
    const servicesHeaderCardPSStars = document.createElement('div');

    return servicesArray = [servicesHeaderCardPSPlus, servicesHeaderCardPSStars];
}

const addClassesServicesCards = (servicesArray) => {
    servicesArray[0].classList.add('headerGamesCard');
    servicesArray[0].classList.add('headerGamesCardPLUS');
    servicesArray[1].classList.add('headerGamesCard');
    servicesArray[1].classList.add('headerServicesCardSTARS');
}

const createServicesList = () => {
    const servicesHeaderList = document.createElement('ul');
    for (let servicesIndex = 0; servicesIndex <= 1; servicesIndex++) {
        servicesHeaderList.appendChild(document.createElement('li'));
    }
    servicesHeaderList.childNodes[0].innerHTML = 'Entretenimiento en PS5';
    servicesHeaderList.childNodes[1].innerHTML = 'Entretenimiento en PS4';

    servicesHeaderList.classList.add('gamesHeaderList');
    if (!expanded) {
        servicesHeaderList.classList.remove('gamesHeaderListAnimationShort');
        servicesHeaderList.classList.add('gamesHeaderListAnimation');
    } else {
        servicesHeaderList.classList.remove('gamesHeaderListAnimation');
        servicesHeaderList.classList.add('gamesHeaderListAnimationShort');
    }

    return servicesHeaderList;
}

const appendServicesChilds = (servicesHeaderDiv, servicesHeaderList) => {
    headerDivExpanded.appendChild(servicesHeaderDiv);
    headerDivExpanded.appendChild(servicesHeaderList);
    servicesHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        servicesHeaderDiv.classList.remove('headerGamesAnimationShort');
        servicesHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        servicesHeaderDiv.classList.remove('headerGamesAnimation');
        servicesHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const createNewsCards = () => {
    const newsHeaderCardBlog = document.createElement('div');
    const newsHeaderCardCalendar = document.createElement('div');

    return newsArray = [newsHeaderCardBlog, newsHeaderCardCalendar];
}

const addClassesNewsCards = (newsArray) => {
    newsArray[0].classList.add('headerGamesCard');
    newsArray[0].classList.add('headerNewsCardBlog');
    newsArray[1].classList.add('headerGamesCard');
    newsArray[1].classList.add('headerNewsCardCalendar');
}

const createNewsList = () => {
    const newsHeaderList = document.createElement('ul');
    for (let newsIndex = 0; newsIndex <= 3; newsIndex++) {
        newsHeaderList.appendChild(document.createElement('li'));
    }
    newsHeaderList.childNodes[0].innerHTML = 'Compromiso PlayStation';
    newsHeaderList.childNodes[1].innerHTML = 'Centro de competición';
    newsHeaderList.childNodes[2].innerHTML = 'Accesibilidad';
    newsHeaderList.childNodes[3].innerHTML = 'Privacidad y Seguridad';

    newsHeaderList.classList.add('gamesHeaderList');
    if (!expanded) {
        newsHeaderList.classList.remove('gamesHeaderListAnimationShort');
        newsHeaderList.classList.add('gamesHeaderListAnimation');
    } else {
        newsHeaderList.classList.remove('gamesHeaderListAnimation');
        newsHeaderList.classList.add('gamesHeaderListAnimationShort');
    }

    return newsHeaderList;
}

const appendNewsChilds = (newsHeaderDiv, newsHeaderList) => {
    headerDivExpanded.appendChild(newsHeaderDiv);
    headerDivExpanded.appendChild(newsHeaderList);
    newsHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        newsHeaderDiv.classList.remove('headerGamesAnimationShort');
        newsHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        newsHeaderDiv.classList.remove('headerGamesAnimation');
        newsHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const createShopCards = () => {
    const shopHeaderCardBlog = document.createElement('div');
    const shopHeaderCardCalendar = document.createElement('div');

    return shopArray = [shopHeaderCardBlog, shopHeaderCardCalendar];
}

const addClassesShopCards = (shopArray) => {
    shopArray[0].classList.add('headerShopCard');
    shopArray[0].classList.add('headerShopCardGames');
    shopArray[1].classList.add('headerShopCard');
    shopArray[1].classList.add('headerShopCardGear');
}

const createShopList = () => {
    const shopHeaderList = document.createElement('ul');
    for (let shopIndex = 0; shopIndex <= 4; shopIndex++) {
        shopHeaderList.appendChild(document.createElement('li'));
    }
    shopHeaderList.childNodes[0].innerHTML = 'Compra juegos de PS5';
    shopHeaderList.childNodes[1].innerHTML = 'Compra juegos de PS4';
    shopHeaderList.childNodes[2].innerHTML = 'Compra PlayStation Plus';
    shopHeaderList.childNodes[3].innerHTML = 'Compra PS4';
    shopHeaderList.childNodes[4].innerHTML = 'Compra PS VR';

    shopHeaderList.classList.add('gamesHeaderList');
    if (!expanded) {
        shopHeaderList.classList.remove('gamesHeaderListAnimationShort');
        shopHeaderList.classList.add('gamesHeaderListAnimation');
    } else {
        shopHeaderList.classList.remove('gamesHeaderListAnimation');
        shopHeaderList.classList.add('gamesHeaderListAnimationShort');
    }

    return shopHeaderList;
}
 
const appendShopChilds = (shopHeaderDiv, shopHeaderList) => {
    headerDivExpanded.appendChild(shopHeaderDiv);
    headerDivExpanded.appendChild(shopHeaderList);
    shopHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        shopHeaderDiv.classList.remove('headerGamesAnimationShort');
        shopHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        shopHeaderDiv.classList.remove('headerGamesAnimation');
        shopHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const createAsistanceCards = () => {
    const asistanceHeaderCardAsistance = document.createElement('div');
    const asistanceHeaderCardPSN = document.createElement('div');

    return asistanceArray = [asistanceHeaderCardAsistance, asistanceHeaderCardPSN];
}

const stylingHeaderDivAsistance = () => {
    if (!expanded) {
        headerDivExpanded.classList.remove('headerDivExpandedAnimation');
        headerDivExpanded.classList.add('headerDivExpandedAsistanceAnimation');        
    }
    headerDivExpanded.classList.remove('headerDivExpanded');
    headerDivExpanded.classList.remove('headerDivExpandedAnimation');
    headerDivExpanded.classList.add('headerDivExpandedAsistance');
}

const addClassesAsistanceCards = (asistanceArray) => {
    asistanceArray[0].classList.add('headerGamesCard');
    asistanceArray[0].classList.add('headerAsistanceCardAsistance');
    asistanceArray[1].classList.add('headerGamesCard');
    asistanceArray[1].classList.add('headerAsistanceCardPSN');
}

const appendAsistanceChilds = (asistanceHeaderDiv) => {
    headerDivExpanded.appendChild(asistanceHeaderDiv);
    asistanceHeaderDiv.classList.add('headerGames');
    if (!expanded) {
        asistanceHeaderDiv.classList.remove('headerGamesAnimationShort');
        asistanceHeaderDiv.classList.add('headerGamesAnimation');
    } else {
        asistanceHeaderDiv.classList.remove('headerGamesAnimation');
        asistanceHeaderDiv.classList.add('headerGamesAnimationShort');
    }
}

const addingHeaderDiv = (event) => {
    stylingHeaderDiv();
    if (event.target == gamesMenu) {
        spiningDownArrow(0);
        headerDivExpanded.style.height = '20rem';
        const gamesHeaderDiv = document.createElement('div');
        const gamesHeaderList = createGameList();
        if (!headerDivExpanded.hasChildNodes()) {
            appendGamesChilds(gamesHeaderDiv, gamesHeaderList);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendGamesChilds(gamesHeaderDiv, gamesHeaderList);
        }
        createGameCards();
        addClassesGameCards(gamesArray);

        gamesArray.forEach((element) => {
            gamesHeaderDiv.appendChild(element);    
        });
    } else if (event.target == hardwareMenu) {
        spiningDownArrow(1);
        headerDivExpanded.style.height = '20rem';
        const hardwareHeaderDiv = document.createElement('div');
        const hardwareHeaderList = createHardwareList();
        if (!headerDivExpanded.hasChildNodes()) {
            appendHardwareChilds(hardwareHeaderDiv, hardwareHeaderList);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendHardwareChilds(hardwareHeaderDiv, hardwareHeaderList);
        }
        createHardwareCards();
        addClassesHardwareCards(hardwareArray);

        hardwareArray.forEach((element) => {
            hardwareHeaderDiv.appendChild(element);    
        });
    } else if (event.target == servicesMenu) {
        spiningDownArrow(2);
        headerDivExpanded.style.height = '20rem';
        const servicesHeaderDiv = document.createElement('div');
        const servicesHeaderList = createServicesList();
        if(!headerDivExpanded.hasChildNodes()) {
            appendServicesChilds(servicesHeaderDiv, servicesHeaderList);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendServicesChilds(servicesHeaderDiv, servicesHeaderList);
        }
        createServicesCards();
        addClassesServicesCards(servicesArray);

        servicesArray.forEach((element) => {
            servicesHeaderDiv.appendChild(element);
        });
    } else if (event.target == newsMenu) {
        spiningDownArrow(3);
        headerDivExpanded.style.height = '20rem';
        const newsHeaderDiv = document.createElement('div');
        const newsHeaderList = createNewsList();
        if(!headerDivExpanded.hasChildNodes()) {
            appendNewsChilds(newsHeaderDiv, newsHeaderList);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendNewsChilds(newsHeaderDiv, newsHeaderList);
        }
        createNewsCards();
        addClassesNewsCards(newsArray);

        newsArray.forEach((element) => {
            newsHeaderDiv.appendChild(element);
        });
    } else if (event.target == shopMenu) {
        spiningDownArrow(4);
        headerDivExpanded.style.height = '20rem';
        const shopHeaderDiv = document.createElement('div');
        const shopHeaderList = createShopList();
        if(!headerDivExpanded.hasChildNodes()) {
            appendShopChilds(shopHeaderDiv, shopHeaderList);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendShopChilds(shopHeaderDiv, shopHeaderList);
        }
        createShopCards();
        addClassesShopCards(shopArray);

        shopArray.forEach((element) => {
            shopHeaderDiv.appendChild(element);
        });
    } else if (event.target == asistanceMenu) {
        spiningDownArrow(5);
        stylingHeaderDivAsistance();
        headerDivExpanded.style.height = '12.5rem';
        const asistanceHeaderDiv = document.createElement('div');
        asistanceHeaderDiv.style.border = 'none';
        if (!headerDivExpanded.hasChildNodes()) {
            appendAsistanceChilds(asistanceHeaderDiv);
        } else {
            while(headerDivExpanded.firstChild) {
                headerDivExpanded.removeChild(headerDivExpanded.lastChild);
            }
            appendAsistanceChilds(asistanceHeaderDiv);
        }
        createAsistanceCards();
        addClassesAsistanceCards(asistanceArray);

        asistanceArray.forEach((element) => {
            asistanceHeaderDiv.appendChild(element);
        });
    }
};

const headerClick = (event) => {
    event.target.style.color = 'rgba(8, 101, 200, 1)';
    if(expanded === false) {
        stylingHeader(expanded);
        stylingSessionButton(expanded);
        stylingPlaystationLogo(expanded);
        header.appendChild(headerDivExpanded);
        addingHeaderDiv(event);
        expanded = true;
    } else if (expanded && event.target == gamesMenu || event.target == hardwareMenu || event.target == servicesMenu || event.target == newsMenu || event.target == shopMenu || event.target == asistanceMenu) {
        Array.from(optionMenu).forEach((element) => {
            if(element !== event.target) {
                element.style.color = 'black';
            }
        })
        addingHeaderDiv(event);
    }
}

const removeHeaderExpanded = () => {
    if (expanded === false) {
        return;
    }
    Array.from(optionMenu).forEach((element) => {
        element.style.color = 'black';
    })
    expanded = true;
    stylingHeader(expanded);
    stylingSessionButton(expanded);
    stylingPlaystationLogo(expanded);
    header.removeChild(headerDivExpanded);
    Array.from(downArrows).forEach((arr) => {
        arr.classList.remove('spiningArrow');
    });
    expanded = false;
}


// Añadimos escuchadores de eventos a los textos del encabezado

Array.from(optionMenu).forEach((element) => {
    element.addEventListener('click', headerClick);
});

stickyHeader.addEventListener('click', removeHeaderExpanded);
mainDiv.addEventListener('click', removeHeaderExpanded);