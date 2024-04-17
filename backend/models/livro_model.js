import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

// Definição do modelo de Livro
const Livro = db.define('livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    editora: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    ano_publicacao: {
        type: Sequelize.INTEGER
    },
    genero: {
        type: Sequelize.STRING(100)
    },
    disponivel: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
},{
    timestamps: false,
    freezeTableName: true
});

export default Livro;