const navbar = document.querySelector('#navbar');

let lastScrollTop = 0;

window.addEventListener(
    "scroll",
    () => {
        var { pageYOffset } = window;
        if ( pageYOffset > lastScrollTop ) {
            navbar.classList.remove("visible");
        }

        else if ( pageYOffset < lastScrollTop ) {
            navbar.classList.add("visible");
        }

        lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
    },
    { passive: true }
);