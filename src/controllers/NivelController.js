const database = require('../models')

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
            const niveisResultado = await database.Niveis.findAll()
            return res.status(200).json(niveisResultado)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static listarPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const niveisResultado = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(niveisResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static cadastrarNiveis = async (req, res) => {
        const resultado = req.body
        try {
            const niveisResultado = await database.Niveis.create(resultado)
            return res.status(200).json(niveisResultado)

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static atualizarNiveis = async (req, res) => {
        const { id } = req.params
        const resultado = req.body
        try {
            await database.Niveis.update(resultado, { where: { id: Number(id) } })
            const niveisAtualizada = await database.Niveis.findOne({ where: { id: Number(id) } });

            res.status(200).json(niveisAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static apagarNiveis = async (req, res) => {
        const { id } = req.params
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `O registro ${id} foi excluido.` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController;