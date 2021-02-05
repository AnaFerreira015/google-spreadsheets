const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')

require('dotenv').config()

const GOOGLE_SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || ""
const GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL || ""
const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || ""

const accessSheet = async () => {
    const doc =  new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID)
    await promisify(doc.useServiceAccountAuth)({
        client_email: GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    })
    const info = await promisify(doc.getInfo)()

    const worksheet = info.worksheets[0]
    // Pega todos os dados
    const rows = await promisify(worksheet.getRows)({})
    
    // Imprime a coluna Student Name e Gender
    rows.forEach(row => {
        console.log(row.studentname, row.gender)
    })
        
}

accessSheet()