import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

// Definição do modelo de Usuário
const Usuario = db.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },
    telefone: {
        type: Sequelize.STRING(20)
    },
    endereco: {
        type: Sequelize.STRING(255)
    },
    tipo: {
        type: Sequelize.STRING(50)
    }
},{
    timestamps: false,
    freezeTableName: true
});

export default Usuario;