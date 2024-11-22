// flowInternshipInfo.js
const { addKeyword } = require('@bot-whatsapp/bot');

// Definimos los temas de información sobre prácticas
const INFORMACION_PRACTICAS = {
    '1': {
        tema: 'Requisitos y proceso de inscripción',
        respuesta: [
            "📋 *REQUISITOS Y PROCESO DE INSCRIPCIÓN A PRÁCTICAS*\n",
            "🔹 *Requisitos académicos:*",
            "• 60% de créditos aprobados (desde séptimo periodo)",
            "• Promedio mínimo de 3.8",
            "• Materias aprobadas",
            "• Estar financieramente al día\n",
            "🔹 *Documentación inicial:*",
            "• Copia de cédula del representante legal",
            "• Copia cámara de comercio (no mayor a 90 días)",
            "• Certificación o carta laboral con funciones\n",
            "🔹 *Documentos durante la práctica:*",
            "• FOR GA 17 (Formato de carta de aceptación)",
            "• Formato de control de asistencia a prácticas (mensual)\n",
            "🔹 *Descargar formatos:*",
            "• Ingresar a: https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php",
            "• Ir a SERVICIOS > BIENESTAR UNIVERSITARIO > PASANTÍAS Y PRÁCTICAS\n",
            "🔹 *Prácticas Psicología:*",
            "• Clínica: se certifican en consultorio psicológico",
            "• Organizacional: Diligenciar formatos del aula virtual\n",
            "🔹 *Prácticas Derecho:*",
            "• Los estudiantes deben estar cursando mínimo séptimo periodo académico y, a su vez, estar al día académica y financieramente en la institución hasta el momento de la verificación por parte de Registro y Control.",
            "• La inscripción a la práctica jurídica se debe realizar por la página principal de la Universitaria en SOLICITUDES o a través del siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/ (opción/inscripción Consultorio Jurídico).",
            "• En este enlace deberán adjuntar: ",
            "  * Fotocopia del documento de identidad.",
            "  * Último recibo de caja expedido por Registro y Control.",
            "• El área de Registro y Control valida la solicitud en un tiempo estimado de 15 días hábiles. Desde el consultorio, realizaremos notificación vía correo electrónico sobre la aprobación o negación de la solicitud y los pasos a seguir.",
            "⚠️ *IMPORTANTE:* Enviar documentos a practicas.iudc@gmail.com"
        ].join('\n')
    },
    '2': {
        tema: 'Proceso de vinculación empresarial',
        respuesta: [
            "🏢 *LINEAMIENTOS PARA EL DESARROLLO DE LAS PRÁCTICAS*\n",
            "🔹 *Duración:*",
            "• De 6 meses a 1 año (según acuerdo empresa-estudiante)\n",
            "🔹 *Horario:*",
            "• Máximo 40 horas semanales",
            "• Horario específico acordado con la empresa\n",
            "🔹 *Proceso de vinculación:*",
            "• Presentación de hoja de vida",
            "• Entrevista con la empresa",
            "• Firma de contrato o convenio",
            "• Inicio de prácticas\n",
            "📞 *Contacto:* Para más información, contactar a coordinación de prácticas"
        ].join('\n')
    },
    '3': {
        tema: 'Modalidades y tipos de práctica',
        respuesta: [
            "👨‍💼 *MODALIDADES DE PRÁCTICA*\n",
            "🔹 *Contrato de Aprendizaje:*",
            "• Acuerdo formal estudiante-empresa",
            "• Formación práctica y teórica\n",
            "🔹 *Vínculo Laboral:*",
            "• Relación laboral formal",
            "• Funciones laborales y remuneración\n",
            "🔹 *Convenio:*",
            "• Acuerdo universidad-entidad externa",
            "• Establece términos de las prácticas\n",
            "🔹 *Pasantía Laboral:*",
            "• Prácticas por tiempo determinado",
            "• Enfoque en aplicación de conocimientos\n",
            "📝 *Nota:* Cada modalidad tiene sus propias características y beneficios"
        ].join('\n')
    },
    '4': {
        tema: 'Evaluación de prácticas',
        respuesta: [
            "📊 *EVALUACIÓN DE PRÁCTICAS*\n",
            "🔹 *Reportes de Avance:*",
            "• Dos reportes parciales",
            "• Un informe final",
            "• Revisión y retroalimentación por tutor académico\n",
            "🔹 *Evaluación Empresarial:*",
            "• Aspectos: responsabilidad, desempeño, habilidades técnicas e interpersonales",
            "• Uso de formato estándar de la universidad\n",
            "🔹 *Evaluación Final:*",
            "• Realizada por el tutor académico",
            "• Basada en: reportes, informe final y evaluación empresarial\n",
            "🗓️ *Frecuencia:* Evaluaciones periódicas durante toda la práctica"
        ].join('\n')
    },
    '5': {
        tema: 'Derechos y deberes',
        respuesta: [
            "⚖️ *DERECHOS Y DEBERES DEL PRACTICANTE*\n",
            "🔹 *Derechos:*",
            "• Orientación y apoyo universidad-empresa",
            "• Actividades acordes a la formación",
            "• Certificado de práctica al finalizar\n",
            "🔹 *Deberes:*",
            "• Cumplir horarios y actividades",
            "• Mantener conducta profesional y ética",
            "• Informar irregularidades al tutor\n",
            "🔹 *Resolución de Conflictos:*",
            "• Notificar inmediatamente al departamento de prácticas\n",
            "📞 *Contacto:* Ante dudas, comunicarse con coordinación de prácticas"
        ].join('\n')
    },
    '6': {
        tema: 'Prácticas Extrasede',
        respuesta: [
            "📢 *INFORMACIÓN IMPORTANTE SOBRE PRÁCTICAS EXTRASEDE*\n",
            "Se le informa a todos los estudiantes que estén realizando actualmente práctica extrasede (Entidad externa) y móvil (en Juntas de Acción Comunal) que deben formalizar la documentación y legalizar la inscripción en la Secretaría del Consultorio Jurídico de lunes a viernes de 1:00 PM a 4:00 PM para que la práctica sea válida al momento de finalizar.\n",
            "📑 *Documentación necesaria:*",
            "🔹 Hoja de vida con foto a color (Formato en Aula Virtual - Consultorio Jurídico).",
            "🔹 Formato de Acta de Prácticas (Formato en Aula Virtual).",
            "🔹 Copia de la Cédula.",
            "🔹 Certificado Laboral.\n",
            "📅 *Fecha límite para entregar documentación:*",
            "La vigencia para la entrega de la documentación mencionada es hasta el día 16 de diciembre de 2024. En caso de no hacer efectiva la entrega, se entenderá como no vigente ni inscrito para validación y cumplimiento como práctica jurídica."
        ].join('\n')
    }
};

// Flujo principal de información sobre prácticas
const flowInternshipInfo = addKeyword(['info'])
    .addAnswer([
        '📚 *Información Detallada sobre Prácticas*\n',
        'Selecciona el tema sobre el que necesitas información:\n',
        '1️⃣ Requisitos y proceso de inscripción',
        '2️⃣ Proceso de vinculación empresarial',
        '3️⃣ Modalidades y tipos de práctica',
        '4️⃣ Evaluación de prácticas',
        '5️⃣ Derechos y deberes',
        '6️⃣ Prácticas Extrasede', // Nueva opción 6 agregada
        '\n📝 Escribe el número de tu consulta o "0" para volver al menú principal'
    ].join('\n'), 
    { capture: true },
    async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
        const userInput = ctx.body.trim().toLowerCase();

        if (userInput === '0') {
            // Redirige al flujo principal
            return gotoFlow(require('../menu/flowMain'));
        }

        const info = INFORMACION_PRACTICAS[userInput];

        if (info) {
            // Muestra la respuesta correspondiente al número elegido
            await flowDynamic(info.respuesta);
            return fallBack(); // Regresa al inicio después de la respuesta
        } else {
            // Si la opción no es válida, muestra el mensaje de error y vuelve al inicio
            await flowDynamic([
                "❌ *Opción no válida*",
                "_Por favor, selecciona un número del 1 al 6 o escribe '0' para volver al menú principal._"
            ].join('\n'));
            return fallBack(); // Regresa para que el usuario intente de nuevo
        }
    });

module.exports = flowInternshipInfo;
