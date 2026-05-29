document.addEventListener("DOMContentLoaded", () => {

    // Create 4 boxes in each row
    document.querySelectorAll(".image-animation__row").forEach(row => {

        for (let i = 0; i < 4; i++) {

            const box = document.createElement("div");
            box.classList.add("image-animation__item");
            row.appendChild(box);
        }

    });

    // take each row and set a delay based on its index
document.querySelectorAll(".image-animation").forEach(section => {
    section.querySelectorAll(".image-animation__row").forEach((row, index) => {
        row.style.setProperty("--delay", `${index * 0.3}s`);
    });
});

    // Scroll animations
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
    console.log(entry.target, entry.isIntersecting, entry.intersectionRatio);

    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    }
});

    }, {
        root: null,
        rootMargin: "0px",
threshold: 0.5

});

    document
    .querySelectorAll(".image-animation__row, .text")
    .forEach(element => observer.observe(element));

});