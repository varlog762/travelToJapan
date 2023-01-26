(function() {
    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else if (window.pageYOffset == 0) {
            header.classList.remove('header_active');
        };
    }
}());

(function () {
    const burgerItem = document.querySelector('.burger'),
        menu = document.querySelector('.header___nav'),
        closeBtn = document.querySelector('.header__nav-close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header___nav_active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('header___nav_active');
    })


}());