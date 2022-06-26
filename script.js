document.addEventListener("scroll", function() {
    var head = document.querySelector("header");
    head.classList.toggle("sticky", window.scrollY > 0);
})