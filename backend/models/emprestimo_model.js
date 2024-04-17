import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

// Definição do modelo de Empréstimo
const Emprestimo = db.define('emprestimos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_emprestimo: {
        type: Sequelize.DATE
    },
    data_devolucao: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.ENUM('pendente', 'concluido', 'atrasado'),
        defaultValue: 'pendente'
    }
},{
    timestamps: false,
    freezeTableName: true
});

export default Emprestimo;