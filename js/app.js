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

function busqueda(lista, indice, clase){
    // console.log(lista,indice, clase)
    lista.forEach((item, i)=>{
        item.classList.remove(clase);
        if(i === indice){
            item.classList.add(clase)
        }
    })
}


window.addEventListener('scroll', function() {
  const navbar = this.document.getElementById('nav__container');
  const logo_riego = this.document.getElementById('nav__riego');
  let nav_links = document.querySelectorAll(".nav__link");

  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
    logo_riego.classList.add('primary');
    nav_links.forEach((link,i)=>{
        link.classList.add('primary');
    })
  } else {
    navbar.classList.remove('scrolled');
    logo_riego.classList.remove('primary');
    nav_links.forEach((link,i)=>{
        link.classList.remove('primary')
    })
  }
});