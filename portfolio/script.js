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