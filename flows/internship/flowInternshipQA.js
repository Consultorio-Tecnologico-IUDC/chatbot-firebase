// flowInternshipQA.js
const { addKeyword } = require('@bot-whatsapp/bot');

// Definimos las preguntas frecuentes y sus respuestas
const PREGUNTAS_FRECUENTES = {
    '1': {
        pregunta: '¿Qué requisitos debo cumplir para iniciar prácticas?',
        respuesta: [
            "📋 *REQUISITOS PARA INICIAR PRÁCTICAS*\n",
            "📚 *Requisitos académicos:*",
            "• Tener un promedio mínimo de 3.8",
            "• Haber aprobado al menos el 60% de los créditos académicos (a partir del séptimo semestre)",
            "• Estar al día con los pagos financieros",
            "• Haber aprobado las materias pertinentes\n",
            "📑 *Documentos requeridos:*",
            "• FOR GA 17 (Formato de aceptación de prácticas)",
            "• Formato de control de asistencia a prácticas",
            "• FOR GA 05 (Formato de seguimiento de práctica laboral)",
            "• Copia de cédula del representante legal",
            "• Copia de cámara de comercio",
            "• Certificación o carta laboral especificando funciones.",
            "⚠️ *IMPORTANTE:* Los documentos deben enviarse a *practicas.iudc@gmail.com*"
        ].join('\n')
    },
    '2': {
        pregunta: '¿Cómo debo hacer la afiliación a la ARL?',
        respuesta: [
            "🏥 *PROCESO DE AFILIACIÓN A LA ARL*\n",
            "📋 *Documentos necesarios para la afiliación:*",
            "• Fotocopia de la cédula ampliada al 150%",
            "• Certificado de EPS (no mayor a 30 días, expedido directamente por la EPS)\n",
            "ℹ️ *Información adicional que se requiere:*",
            "• Nombre completo del estudiante",
            "• Tipo y número de documento de identidad",
            "• Programa académico y jornada",
            "• Dirección y contacto del estudiante",
            "• Año de matrícula y fecha de inicio de la práctica",
            "• Contacto de emergencia con nombre, parentesco y número",
            "⚠️ *IMPORTANTE:* Enviar toda la documentación a *practicas.iudc@gmail.com*"
        ].join('\n')
    },
    '3': {
        pregunta: '¿Cuánto tiempo dura la práctica?',
        respuesta: [
            "⏳ *DURACIÓN DE LAS PRÁCTICAS*\n",
            "• La duración de la práctica varía según el acuerdo entre la universidad y la empresa.",
            "• Generalmente, las prácticas tienen una duración de entre *6 meses y 1 año*.",
            "• La duración específica depende del tipo de modalidad y el convenio establecido."
        ].join('\n')
    },
    '4': {
        pregunta: '¿Qué horarios hay para la realización de la práctica?',
        respuesta: [
            "🕒 *HORARIOS DE LAS PRÁCTICAS*\n",
            "• El horario de las prácticas varía según el convenio entre el estudiante y la empresa.",
            "• Generalmente, las prácticas tienen un máximo de *40 horas semanales*.",
            "• Es importante que el horario sea acordado entre el estudiante y la entidad donde se realiza la práctica, respetando siempre los límites establecidos por la universidad."
        ].join('\n')
    },
    '5': {
        pregunta: '¿Dónde encuentro los formatos a diligenciar?',
        respuesta: [
            "📄 *FORMATOS A DILIGENCIAR*\n",
            "• Los formatos necesarios para realizar las prácticas están disponibles en el Aula Virtual.",
            "• Ingrese a: https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php",
            "• En el menú, dirígete a *SERVICIOS > BIENESTAR UNIVERSITARIO > PASANTÍAS Y PRÁCTICAS* para encontrar los formatos requeridos.",
            "• Asegúrate de descargar y completar los formatos correctamente."
        ].join('\n')
    },
    '6': {
        pregunta: '¿Dónde entrego los formatos?',
        respuesta: [
            "📬 *ENTREGA DE FORMATOS*\n",
            "• Los formatos deben ser entregados en las siguientes sedes dependiendo del área de práctica:",
            "  🔹 *Consultorio Jurídico* (para prácticas de Derecho)",
            "  🔹 *Consultorio Psicológico* (para prácticas de Psicología)",
            "  🔹 *En la Secretaría de Bienestar Universitario* para prácticas de otras áreas",
            "• Si estás realizando una práctica en Juntas de Acción Comunal o en una entidad externa, debes entregar los formatos en la Secretaría del Consultorio Jurídico de lunes a viernes entre *1:00 PM y 4:00 PM*."
        ].join('\n')
    }
};

// Menú con las opciones de preguntas frecuentes
const MENU_OPTIONS = [
    "🎓 *Preguntas Frecuentes*\n",
    "*Selecciona el número correspondiente a tu pregunta:*\n",
    "1️⃣ ¿Qué requisitos debo cumplir para iniciar prácticas?",
    "2️⃣ ¿Cómo debo hacer la afiliación a la ARL?",
    "3️⃣ ¿Cuánto tiempo dura la práctica?",
    "4️⃣ ¿Qué horarios hay para la realización de la práctica?",
    "5️⃣ ¿Dónde encuentro los formatos a diligenciar?",
    "6️⃣ ¿Dónde entrego los formatos?",
    "\n📝 _Escribe el número de tu consulta o '0' para volver al menú principal._"
].join('\n');

// Flujo principal de Preguntas Frecuentes
const flowInternshipQA = addKeyword(['preguntas', 'frecuentes', 'consultas'])
    .addAnswer(MENU_OPTIONS, { capture: true }, async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
        const userResponse = ctx.body.trim().toLowerCase();

        if (userResponse === '0') {
            // En lugar de 'menu', redirigimos a flowMain
            return gotoFlow(require('../menu/flowMain'));
        }

        const pregunta = PREGUNTAS_FRECUENTES[userResponse];

        if (pregunta) {
            // Enviamos la respuesta correspondiente de la pregunta frecuente
            await flowDynamic(pregunta.respuesta);
            return fallBack(); // Volvemos al menú o al flujo principal
        } else {
            // Si la opción no es válida, informamos al usuario y pedimos un intento válido
            await flowDynamic([
                "❌ *Opción no válida*",
                "_Por favor, selecciona un número del 1 al 6 o escribe '0' para volver al menú principal._"
            ].join('\n'));
            return fallBack(); // Regresamos al inicio para que el usuario intente de nuevo
        }
    });

module.exports = flowInternshipQA;
