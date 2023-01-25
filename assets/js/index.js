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