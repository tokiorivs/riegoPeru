function agregarElemento(imagen, texto) {
    // Crear un nuevo div
    const nuevoElemento = document.createElement('div');
    
    // Agregar clases al div
    nuevoElemento.classList.add('nuevo-elemento'); // Clase general para el nuevo elemento
    nuevoElemento.classList.add('imagen-texto-elemento'); // Clase para los elementos de imagen y texto
  
    // Agregar imagen al div
    const imagenElemento = document.createElement('img');
    imagenElemento.src = imagen;
    imagenElemento.classList.add('imagen-elemento'); // Clase para la imagen
    nuevoElemento.appendChild(imagenElemento);
  
    // Agregar texto al div
    const textoElemento = document.createElement('p');
    textoElemento.textContent = texto;
    textoElemento.classList.add('texto-elemento'); // Clase para el texto
    nuevoElemento.appendChild(textoElemento);
  
    // Insertar el nuevo div debajo del botón presionado
    const botonPresionado = event.target;
    botonPresionado.parentNode.insertBefore(nuevoElemento, botonPresionado.nextSibling);
  }
    const  mediaInfo = [
        {
            id:"button_1",
            media : "./img/ventajas img_mobile.jpg",
            text : " Lleva un registro completo de las tomas de agua y sus respectivos caudales para garantizar el uso equitativo y sostenible.Facilita el mantenimiento y la distribución adecuada de agua en los canales de riego para maximizar la eficiencia del sistema."
        },

        {
            id:"button_2",
            media : "./img/ventajas img_mobile.jpg",
            text : "   Mantén actualizada la información de los regantes, sus parcelas y cultivos para una gestión más precisal."
        },
        {
            id:"button_3",
            media:"./img/ventajas img_mobile.jpg",
            text:" Gestiona eficientemente la información de las juntas de usuarios, incluyendo sus miembros y autoridades.",
        },
           {
            id:"button_4",
            media:"./img/ventajas img_mobile.jpg",
            text:" Simplifica y agiliza los procesos burocráticos relacionados con los permisos, licencias y otros trámites.",
        },
           {
            id:"buttton_5",
            media:"./img/ventajas img_mobile.jpg",
            text:"Realiza de forma efectiva y transparente la facturación y cobro del canon de agua a los regantes.",
        },
           {
            id:"button_6",
            media:"./img/ventajas img_mobile.jpg",
            text:" Almacena y organiza de manera segura todos los documentos relevantes para la junta y sus regantes.",
        },
    ]
  
  

function newMedia (media, text) {
    const feature__media = document.createElement('div');
    feature__media.classList.add('feature__media');
    
    const  accordeon__content = document.createElement('div');
    accordeon__content.classList.add('accordeon_content');

    const feature__figure = document.createElement('figure');
    feature__figure.classList.add('feature__figure');

    const feature__img = document.createElement('img');
    feature__img.src = media
    feature__img.classList.add('feature__img')
    
}