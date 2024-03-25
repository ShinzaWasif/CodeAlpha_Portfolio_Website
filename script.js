let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar link (scroll)
    navbar.classList.remove('active');

};



let elements = document.getElementsByClassName('contact_icons');

for (let i = 0; i < elements.length; i++) {
    let links = elements[i].getElementsByTagName('a');

    for (let j = 0; j < links.length; j++) {
        links[j].addEventListener('mouseover', function () {
            // Apply styles when mouse is over the element (hover)
            this.style.transform = 'scale(1.03)';
            this.style.border = '.2rem solid yellow';
        });

        links[j].addEventListener('mouseout', function () {
            // Back to old style when mouse leaves the element
            this.style.transform = 'scale(1)';
            this.style.border = 'none';
        });
    }
}
