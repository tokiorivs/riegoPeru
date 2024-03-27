const bannerInfo = [
    'administra',
    'gestiona',
    'reacauda',
    'ahorra tiempo',
    'garantía',
];
const bannerItem = document.querySelector('#banner_item')
let indice = 0;
function bannerRotate (){
    bannerItem.innerText = bannerInfo[indice];
    indice = (indice + 1) % bannerInfo.length   
}
setInterval(bannerRotate, 1500)

window.addEventListener('scroll', function() {
  const navbar = this.document.getElementById('nav__container');
  const logo_riego = this.document.getElementById('nav__riego');
  const nav_link = document.querySelectorAll(".nav__link");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
    logo_riego.classList.add('primary');
    nav_link.forEach((link,i)=>{
        link.classList.add('primary');
    });
  } else {
    navbar.classList.remove('scrolled');
    logo_riego.classList.remove('primary');
    nav_link.forEach((link,i)=>{
        link.classList.remove('primary')
    });
  }
});

document.querySelector(".nav__bars").addEventListener("click", animateBars);
const line__1__bars = document.querySelector(".line1__bars-menu");
const line__2__bars = document.querySelector(".line2__bars-menu");
const line__3__bars = document.querySelector(".line3__bars-menu");
const nav_links = document.querySelector(".nav__links");
const logo_riego = this.document.getElementById('nav__riego');
console.log(logo_riego)

function animateBars(){

    line__1__bars.classList.toggle("activeline1__bars-menu");
    line__2__bars.classList.toggle("activeline2__bars-menu");
    line__3__bars.classList.toggle("activeline3__bars-menu");
    nav_links.classList.toggle('dis');
    if(logo_riego.classList.contains("primary")){
        logo_riego.classList.remove("primary")
        console.log("esoty aca")
    }
    // logo_riego.classList.toggle('logo__red')
    document.body.classList.toggle("no-scroll")
}
