const featureButton = document.querySelector('#feature_button');
const featureTitle = document.querySelector("#feature_title");
const featureText = document.querySelector("#feature_text")
 

const featureInfo = [
    {
        title: "Tomas de agua y canales de riego",
        text: "Lleva un registro completo de las tomas de agua y sus respectivos caudales para garantizar un uso equitativo y sostenible. Facilita el mantenimiento y la distribución adecuada de agua en los canales de riego para maximizar la eficiencia del sistema."
    },
       {
        title: "Padrones de regantes",
        text: "Mantén actualizada la información de los regantes, sus parcelas y cultivos para una gestión más precisa."
    },
       {
        title: "administración de juntas",
        text: "Gestiona eficientemente la información de las juntas de usuarios, incluyendo sus miembros y autoridades."
    },
       {
        title: "Tramites administrativos",
        text: "Simplifica y agiliza los procesos burocráticos relacionados con los permisos, licencias y otros trámites."

    },
       {
        title: "Cobro de canon de agua",
        text: "Realiza de forma efectiva y transparente la facturación y cobro del canon de agua a los regantes."
    },
       {
        title: "gestión de documentos",
        text: "Almacena y organiza de manera segura todos los documentos relevantes para la junta y sus regantes."

    },
] 
featureButton.onclick = changeInfo;

function changeInfo(){

}
