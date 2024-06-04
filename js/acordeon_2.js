let feature_media = document.querySelectorAll(".feature__media");
let feature_button = document.querySelectorAll(".feature__button");
let button_close = document.querySelectorAll(".button__close");
let button_open = document.querySelectorAll(".button__open");

// console.log(button_open)


function busqueda(lista, indice, clase){
    // console.log(lista,indice, clase)
    lista.forEach((item, i)=>{
        item.classList.remove(clase);
        if(i === indice){
            item.classList.add(clase)
        }
    })
}
feature_button.forEach((button, i)=>{
    button.addEventListener('click', ()=>{
        busqueda(feature_media, i, clase='active');
        busqueda(feature_button,i,clase="feature__active");
    })
    
})

// feature_button.forEach((button, i) => {
//     button.addEventListener('click', () => {
//         feature_media.forEach((media, j) => {
//             media.classList.remove('active');
            
//             if (i === j) {
//                 media.classList.add('active');
//             }
//         });
//         feature_button.forEach((button, h)=>{
//                 button.classList.remove('feature__active')
//                 if (h === i){
//                     button.classList.add('feature__active')
//                 }
//             }) 

//     });
// });
