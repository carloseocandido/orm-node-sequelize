const database = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TurmaController {
    static async listaTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};
        data_inicial || data_final ? (where.data_inicio = {}) : null;
        data_inicial ? where.data_inicio[Op.gte] = new Date(data_inicial) : null;
        data_final ? where.data_inicio[Op.lte] = new Date(data_final) : null;

        try {
            const todasAsTurmas = await database.Turmas.findAll({ where });
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static listaTurmaPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const turmasResultado = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turmasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static cadastraTurma = async (req, res) => {
        const resultado = req.body;
        try {
            const turmasResultado = await database.Turmas.create(resultado);
            return res.status(200).json(turmasResultado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaTurma = async (req, res) => {
        const { id } = req.params;
        const resultado = req.body;
        try {
            await database.Turma.update(resultado, { where: { id: Number(id) } });
            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } });

            res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static apagaTurma = async (req, res) => {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `O registro ${id} foi excluido.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static restauraTurma = async (req, res) => {
        const { id } = req.params;
        try {
            console.log(id);
            await database.Turmas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Id ${id} restaurado.` });
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    };
}

module.exports = TurmaController;