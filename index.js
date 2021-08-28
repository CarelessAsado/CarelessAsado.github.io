let slides = document.querySelectorAll ('.slide-container');
let index = 0;
function next () {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');   
}
function prev () {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');   
}



/*Esto es para q el menu abra cuando clickeo*/
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
toggle.onclick = function(){
    
    toggle.classList.toggle ("active");
    sidebar.classList.toggle ("active");
}
/*ESTO ES PARA Q EL NAV SE CIERRE CUANDO CLICKEO*/
document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle")
    {
        toggle.classList.remove("active");
        sidebar.classList.remove("active");
    }
}





