const container = document.getElementById("squareContainer");

/* Mouse enters */
container.addEventListener("mouseenter", function () {

    container.classList.add("active");

});


/* Mouse leaves */
container.addEventListener("mouseleave", function () {

    container.classList.remove("active");

});