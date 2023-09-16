const database = require("../models");

class PessoaController {
    static listaTodasAsPessoas = async (req, res) => {
        try {
            const pessoasResultado = await database.Pessoas.findAll();
            return res.status(200).json(pessoasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static listaPessoaPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const pessoasResultado = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static cadastraPessoa = async (req, res) => {
        const resultado = req.body;
        try {
            const pessoasResultado = await database.Pessoas.create(resultado);
            return res.status(200).json(pessoasResultado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaPessoa = async (req, res) => {
        const { id } = req.params;
        const resultado = req.body;
        try {
            await database.Pessoas.update(resultado, { where: { id: Number(id) } });
            const pessoasAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });

            res.status(200).json(pessoasAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static apagaPessoa = async (req, res) => {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `O registro ${id} foi excluido.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static restauraPessoa = async (req, res) => {
        const { id } = req.params;
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static listaPorMatricula = async (req, res) => {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matriculaResultado = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(matriculaResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static criaMatricula = async (req, res) => {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaMatricula = async (req, res) => {
        const { estudanteId, matriculaId } = req.params;
        const informacoes = req.body;
        try {
            await database.Matriculas.update(informacoes, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const MatriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                }
            });

            res.status(200).json(MatriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static apagaMatricula = async (req, res) => {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ message: `O registro ${matriculaId} foi excluido.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static restauraMatricula = async (req, res) => {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ message: `O registro ${matriculaId} foi restaurado.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = PessoaController;