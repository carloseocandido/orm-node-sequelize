const database = require("../models");

class NivelController {
    static async listaTodosOsNiveis(req, res) {
        try {
            const niveisResultado = await database.Niveis.findAll();
            return res.status(200).json(niveisResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static listaNivelPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const niveisResultado = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(niveisResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static cadastraNivel = async (req, res) => {
        const resultado = req.body;
        try {
            const niveisResultado = await database.Niveis.create(resultado);
            return res.status(200).json(niveisResultado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaNivel = async (req, res) => {
        const { id } = req.params;
        const resultado = req.body;
        try {
            await database.Niveis.update(resultado, { where: { id: Number(id) } });
            const niveisAtualizada = await database.Niveis.findOne({ where: { id: Number(id) } });

            res.status(200).json(niveisAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static apagaNivel = async (req, res) => {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `O registro ${id} foi excluido.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static restaurarNivel = async (req, res) => {
        const { id } = req.params;
        try {
            await database.Niveis.restore( {where: { id: Number(id) }});
            return res.status(200).json({ message: `Id ${id} restaurado.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = NivelController;