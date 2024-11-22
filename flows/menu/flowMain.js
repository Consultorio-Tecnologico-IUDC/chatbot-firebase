// menu/flowMain.js
const { addKeyword } = require('@bot-whatsapp/bot');
const { globalState } = require('../../state/globalState');
const keywords = require('../../data/words');
const flowInternshipInfo = require('../internship/flowInternshipInfo');
const flowInternshipQA = require('../internship/flowInternshipQA');
const flowContact = require('./flowContact');
const flowHelp = require('./flowHelp');

// Función para eliminar tildes
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// Función para normalizar el texto
function normalizeText(text) {
    return removeAccents(text.toLowerCase()).trim();
}

// Definimos flowMain y keywordHandler
const flowMain = addKeyword(['hola', 'ola', 'menu', 'menú', 'inicio', 'buenos días', 'buen dia', 'buenas tardes', 'qué tal', 'buenas noches', 'cómo estás', 'hey', 'hello', '0'])
    .addAnswer('¡Bienvenido al Chatbot de Prácticas Universitarias IUDC!, Recuerda que el proceso de prácticas es obligatorio en todos los programas para tu grado 👋\n')
    .addAnswer(
        [
            'Por favor, selecciona una opción:',
            '1. 📚 Información sobre prácticas',
            '2. ❓ Preguntas frecuentes',
            '3. 📞 Contactar al departamento de Prácticas',
            '4. 🆘 Ayuda con el bot'
        ],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = normalizeText(ctx.body); // Normalizamos la opción
            globalState.setUserData({ name: ctx.pushName }); // Guardamos el nombre del usuario

            switch (option) {
                case '1':  // Información sobre prácticas
                    return gotoFlow(flowInternshipInfo);
                case '2':  // Preguntas frecuentes
                    return gotoFlow(flowInternshipQA);
                case '3':  // Contactar al departamento
                    return gotoFlow(flowContact);
                case '4':  // Ayuda con el bot
                    return gotoFlow(flowHelp);
                default:  // Opción inválida, vuelve al menú
                    return gotoFlow(flowMain);
            }
        }
    );

// Este controlador de palabras clave captura otras palabras y redirige
const keywordHandler = addKeyword(Object.values(keywords).flat())
    .addAnswer(
        'Parece que estás buscando información específica. ¿Puedes ser más claro con tu pregunta?',
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const userInput = normalizeText(ctx.body); // Normalizamos la entrada del usuario

            // Si el usuario menciona 'prácticas', redirigimos a la información sobre prácticas
            if (keywords.practicas.some(word => userInput.includes(normalizeText(word)))) {
                return gotoFlow(flowInternshipInfo);
            }
            // Si menciona 'empresas', redirigimos a las opciones de empresas (asegúrate de tener el flujo de empresas)
            else if (keywords.empresas.some(word => userInput.includes(normalizeText(word)))) {
                return gotoFlow(flowCompanies); // Asegúrate de que este flujo esté definido correctamente
            }
            // Si menciona 'ayuda', redirigimos al flujo de ayuda
            else if (keywords.ayuda.some(word => userInput.includes(normalizeText(word)))) {
                return gotoFlow(flowHelp);
            }
            // Si menciona 'menu' o 'menú', volvemos al menú principal
            else if (keywords.menu.some(word => userInput.includes(normalizeText(word)))) {
                return gotoFlow(flowMain);
            }
            // Si no coincide con ninguna palabra clave, lo redirigimos a las preguntas frecuentes
            else {
                return gotoFlow(flowInternshipQA);
            }
        }
    );

module.exports = { flowMain, keywordHandler };
