import { Sequelize } from "sequelize";

const db = new Sequelize('LibraryTech', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db


/*
const mysql = require('mysql2');

const conecta = mysql.createConnection({
    host: 'localhost', // endereço banco
    user: 'root', // usuário padrão
    database: 'LibraryTech' // nome do banco alvo'
});

module.exports = {conecta}
*/