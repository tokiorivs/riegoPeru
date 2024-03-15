
let elementAcordeon = document.getElementsByClassName("feature__button");
console.log(elementAcordeon);
for (let i=0; i < elementAcordeon.length; i++){
    elementAcordeon[i].addEventListener("click", function(){
        let feature_media = this.nextElementSibling;
        
        // Si el contenido ya está visible
        if (feature_media.style.display === "block") {
            // Oculta el contenido y remueve la clase "active" del botón
            feature_media.style.display = "none";
            this.classList.remove("active");
            this.classList.remove("feature__active");
        } else {
            // Oculta todos los contenidos del acordeón
            let allContents = document.getElementsByClassName("feature__media");
            for (let j = 0; j < allContents.length; j++) {
                allContents[j].style.display = "none";
            }
            
            // Remueve la clase "active" de todos los botones
            let allButtons = document.getElementsByClassName("feature__button");
            for (let k = 0; k < allButtons.length; k++) {
                allButtons[k].classList.remove("active");
                allButtons[k].classList.remove("feature__active");
            }
            
            // Muestra el contenido correspondiente al botón clickeado
            feature_media.style.display = "block";
            
            // Agrega la clase "active" al botón clickeado
            this.classList.add("active");
            this.classList.add("feature__active");
        }
    });
}
