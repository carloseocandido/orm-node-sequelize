"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Pessoas extends Model {
        static associate(models) {
            Pessoas.hasMany(models.Turmas, {
                foreignKey: "docente_id"
            });
            Pessoas.hasMany(models.Matriculas, {
                foreignKey: "estudante_id",
                scope: { status: "confirmado" },
                as: "aulasMatriculadas"
            });
        }
    }
    Pessoas.init({
        nome: {
            type: DataTypes.STRING,
            validate: {
                validacao: function(date) {
                    if (date.length < 3) throw new Error("o campo nome deve conter pelo menos 3 caracteres");
                }
            }
        },
        ativo: DataTypes.BOOLEAN,
        email: { 
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "e-mail invalido"
                }
            }
        },
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Pessoas",
        paranoid: true,
        defaultScope: { 
            where: { ativo: true }
        },
        scopes: {
            todos: { where: {} }
        }
    });
    return Pessoas;
};