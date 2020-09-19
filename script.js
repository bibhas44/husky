window.addEventListener("scroll", function () {
    console.log('sticky')
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})