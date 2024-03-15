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