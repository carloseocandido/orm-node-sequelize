const database = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static listarPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const turmasResultado = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turmasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static cadastrarTurma = async (req, res) => {
        const resultado = req.body
        try {
            const turmasResultado = await database.Turmas.create(resultado)
            return res.status(200).json(turmasResultado)

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static atualizarTurma = async (req, res) => {
        const { id } = req.params
        const resultado = req.body
        try {
            await database.Turma.update(resultado, { where: { id: Number(id) } })
            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } });

            res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static apagarTurma = async (req, res) => {
        const { id } = req.params
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `O registro ${id} foi excluido.` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;