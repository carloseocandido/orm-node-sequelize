const database = require("../models");
const Sequelize = require("sequelize");

class PessoaController {
    static listaPessoasAtivas = async (req, res) => {
        try {
            const pessoasAtivasResultado = await database.Pessoas.findAll();

            return res.status(200).json(pessoasAtivasResultado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static listaTodasAsPessoas = async (req, res) => {
        try {
            const pessoasResultado = await database.Pessoas.scope("todos").findAll();

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

            return res.status(200).json(MatriculaAtualizada);
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

    static listaMatriculaPorPessoa = async (req, res) => {
        const { estudanteId } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId) }});
            const matriculas = await pessoa.getAulasMatriculadas();

            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static listaMatriculaPorTurma = async (req, res) => {
        const { turmaId } = req.params;
        try {
            const todasAsMatriculas = await database.Matriculas
                .findAndCountAll({
                    where: {
                        turma_id: Number(turmaId),
                        status: "confirmado"
                    },
                    limit: 20,
                    order: [["estudante_id", "ASC"]]
                });
            
            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static listaTurmasLotadas = async (req, res) => {
        const lotacaoTurma = 2;
        try {
            const turmasLotadas = await database.Matriculas
                .findAndCountAll({
                    where: {
                        status: "confirmado"
                    },
                    attriutes: ["turma_id"],
                    group: ["turma_id"],
                    having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
                });

            return res.status(200).json(turmasLotadas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static cancelaPessoa = async (req, res) => {
        const { estudanteId } = req.params;
        try {

            database.sequelize.transaction( async transacao => {
                await database.Pessoas
                    .update({ ativo: false }, { where: { id: Number(estudanteId) }}, { transaction: transacao });
                await database.Matriculas
                    .update({ status: "cancelado" }, { where: { estudante_id: Number(estudanteId) }}, { transaction: transacao });
            
                return res.status(200).json({ message: `matrículas referente ao estudante ${estudanteId} canceladas` });
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = PessoaController;