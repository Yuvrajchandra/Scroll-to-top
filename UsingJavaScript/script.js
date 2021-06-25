// ===== Scroll to Top ====
const scrollTop = document.getElementById('scrolltop')

// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}

// If the page is scrolled more than 200px,
// show the scroll-to-top button
// Otherwise hide the button
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
};
