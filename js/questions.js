
questions = {
  "¿Puedo gestionar toda mi contabilidad con su programa?": "¡Sí! El software te permite llevar un registro completo de todas tus operaciones financieras. facilitando la gestión de ingresos, egresos, cuentas por cobrar y pagar, y te ayuda a generar informes detallados para un análisis completo de tu situación financiera.",
  "¿Guarda un historial de cobro detallado?": "Sí, el software almacena un registro completo de cada recibo emitido, incluyendo: Número de recibo, Fecha de emisión, Monto del recibo, Estado del pago (pagado, pendiente, etc.). Puedes consultar el historial de cobro de cada cliente o predio de forma rápida y sencilla.",
  "¿Me indica el monto exacto que debo pagar?": "Sí, calcula el monto exacto a pagar por cada cliente, considerando todos los factores relevantes, como: Consumo de agua, Tarifas aplicables, Impuestos y recargos. Emite recibos claros y detallados con la información del monto a pagar y las fechas límite de pago.",
  "¿Ofrece opciones de pago flexibles?": "Sí, permite a tus clientes realizar pagos en cuentas corrientes del Banco de la Nación o en otras entidades financieras. Facilita el proceso de cobro y reduce el riesgo de morosidad.",
  "¿Cómo puedo actualizar mi información de pago?": "Tus clientes pueden consultar su saldo pendiente y descargar sus recibos a través de una consulta web o por WhatsApp. Esto les permite mantenerse informados y actualizados sobre su situación de pago.",
  "¿Puedo segmentar mi información por comisión, toma o canal de riego?": "Sí, el software te permite seleccionar la información que deseas visualizar según diferentes criterios, como: Comisión, Toma, Canal de riego. Esto facilita el análisis de la información contable por áreas específicas de interés.",
  "¿Puedo conocer el área y la unidad catastral de cada uno de mis predios?": "Sí, te muestra el área total y el área bajo riego de cada uno de tus predios. Te ayuda a llevar un control preciso del uso del agua en cada predio.",
  "¿Emite reportes y libros contables?": "Sí, genera automáticamente reportes y libros contables esenciales, como el libro diario. Te permite cumplir con las obligaciones legales y tener acceso a información financiera organizada.",
  "¿El paquete incluye herramientas de gestión?": "Actualmente, el software no incluye herramientas de gestión específicas. Sin embargo, se encuentran en desarrollo funciones para optimizar la gestión del negocio, como: Control de inventarios, Gestión de clientes, Análisis de consumo.",
  "¿El programa emite los formatos que me pide la Autoridad Nacional del Agua (ANA)?": "La función para emitir automáticamente los formatos requeridos por la ANA se encuentra en desarrollo. Te permitirá ahorrar tiempo y cumplir con los requisitos legales de manera eficiente.",
  "¿Puedo actualizar información de volúmenes programados o distribuidos?": "Sí, la función para actualizar la información de volúmenes programados o distribuidos de agua se encuentra en desarrollo. Te permitirá mantener un registro preciso del uso del agua y optimizar la gestión del recurso."
}

function createQuestion(_pregunta, _respuesta)
{
    const divContenedor = document.createElement('div');
    const pregunta = document.createElement('p');
    const respuesta = document.createElement('p');
    pregunta.textContent = _pregunta;
    respuesta.textContent = _respuesta;
    divContenedor.classList.add('question__container');
    respuesta.classList.add('question__response');
    pregunta.classList.add('question');
    divContenedor.appendChild(pregunta);
    divContenedor.appendChild(respuesta);
    return divContenedor

}

for(let i =0; i< Object.keys(questions).length; i++)
    {

        pregunta  = Object.keys(questions)[i];
        respuesta = questions[pregunta];
        console.log(pregunta);
        console.log(respuesta);
        const questionDiv = document.getElementById('question');
        const elementoPreguntaRespuesta1 = createQuestion(pregunta, respuesta);
        questionDiv.appendChild(elementoPreguntaRespuesta1);

    }

