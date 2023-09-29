let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance : '65px',
    duration : 2600,
    delay : 450,
    reset : true
});

sr.reveal('.text', {delay : 200, origin : 'top'});
sr.reveal('.image', {delay : 450, origin : 'top'});
sr.reveal('.icons', {delay : 500, origin : 'left'});
sr.reveal('.scroll', {delay : 500, origin : 'right'});

function change() {
    var home = document.getElementById("home");
    var ye = document.getElementById("ye");
    var go = document.getElementById("go");
    home.style.background = "black";
    ye.style.backgroundColor = "goldenrod";
    go.style.backgroundColor = "goldenrod";
}