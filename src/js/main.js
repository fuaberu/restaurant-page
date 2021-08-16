import './../scss/main.scss'

const content = document.getElementById("content");
content.classList = 'img-container';

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Sushi Store';
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    
    header.appendChild(h1)
    header.appendChild(nav)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactButton)
    content.appendChild(header);
}
createHeader();

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerText = 'Built by'
    const aLinkGit = document.createElement('div');
    aLinkGit.innerHTML = "<a href='https://github.com/fuaberu' class='footer-link' target='_blank'>Fuaberu</a>" ;
    const aLinkRepository = document.createElement('div');
    aLinkRepository.innerHTML = "<a href='https://fuaberu.github.io/restaurant-page/' class='footer-link' target='_blank'>Source Code</a>" ;
    
    footer.appendChild(aLinkGit);
    footer.appendChild(aLinkRepository);
    content.appendChild(footer);
}
createFooter();
