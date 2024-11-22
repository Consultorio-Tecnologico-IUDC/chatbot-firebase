// app.js
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

// Importación de flujos
const { flowMain, keywordHandler } = require('./flows/menu/flowMain')
const flowInternshipInfo = require('./flows/internship/flowInternshipInfo')
const flowInternshipQA = require('./flows/internship/flowInternshipQA')
const flowContact = require('./flows/menu/flowContact')
const flowHelp = require('./flows/menu/flowHelp')

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([
        flowMain,
        keywordHandler,
        flowInternshipInfo,
        flowInternshipQA,
        flowContact,
        flowHelp,
    ])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb({
        port: 3000,
        qr: (qr) => {
            console.log('QR RECEIVED', qr);
            qrcode.generate(qr, { small: true });
        }
    })
}

main()