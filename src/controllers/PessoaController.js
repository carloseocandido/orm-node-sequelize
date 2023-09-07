const database = require('../models')

class PessoaController {
    static listarTodasAsPessoas = async (req, res) => {
        try {
            const pessoasResultado = await database.Pessoas.findAll()
            return res.status(200).json(pessoasResultado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static listarPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const pessoasResultado = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static cadastrarPessoas = async (req, res) => {
        const resultado = req.body
        try {
            const pessoasResultado = await database.Pessoas.create(resultado)
            return res.status(200).json(pessoasResultado)

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static atualizarPessoas = async (req, res) => {
        const { id } = req.params
        const resultado = req.body
        try {
            await database.Pessoas.update(resultado, { where: { id: Number(id) } })
            const pessoasAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });

            res.status(200).json(pessoasAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static apagarPessoas = async (req, res) => {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `O registro ${id} foi excluido.` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;