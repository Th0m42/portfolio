/* =========================
   ANIMATION AU SCROLL
========================= */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });


/* =========================
   MENU MOBILE
========================= */

const nav = document.querySelector(".nav");

const menuToggle =
    document.querySelector(".menu-toggle");

const navigationLinks =
    document.querySelectorAll(".links a");


menuToggle.addEventListener("click", () => {

    const isOpen =
        nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Fermer le menu"
            : "Ouvrir le menu"
    );

    menuToggle.textContent =
        isOpen
            ? "×"
            : "☰";

});


/* =========================
   FERMER LE MENU APRÈS CLIC
========================= */

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

        menuToggle.textContent = "☰";

    });

});


/* =========================
   NAVIGATION ACTIVE
========================= */

const links = [
    ...document.querySelectorAll(".links a")
];


window.addEventListener("scroll", () => {

    const currentPosition =
        window.scrollY + 180;


    document
        .querySelectorAll("section[id]")
        .forEach((section) => {

            const sectionStart =
                section.offsetTop;

            const sectionEnd =
                section.offsetTop +
                section.offsetHeight;


            if (
                currentPosition >= sectionStart &&
                currentPosition < sectionEnd
            ) {

                links.forEach((link) => {

                    const sectionLink =
                        link.getAttribute("href");

                    const isActive =
                        sectionLink ===
                        "#" + section.id;


                    link.style.color =
                        isActive
                            ? "#f5f7ff"
                            : "";

                });

            }

        });

});