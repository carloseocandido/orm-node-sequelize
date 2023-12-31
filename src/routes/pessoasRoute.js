const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
    .get("/pessoas", PessoaController.listaPessoasAtivas)
    .get("/pessoas/todos", PessoaController.listaTodasAsPessoas)
    .get("/pessoas/:id", PessoaController.listaPessoaPorId)
    .get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.listaPorMatricula)
    .get("/pessoas/:estudanteId/matricula", PessoaController.listaMatriculaPorPessoa)
    .get("/pessoas/matricula/:turmaId/confirmadas", PessoaController.listaMatriculaPorTurma)
    .get("/pessoas/matricula/lotada", PessoaController.listaTurmasLotadas)
    .post("/pessoas", PessoaController.cadastraPessoa)
    .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
    .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
    .post("/pessoas/:estudanteId/matricula/:matriculaId/restaura", PessoaController.restauraMatricula)
    .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
    .put("/pessoas/:id", PessoaController.atualizaPessoa)
    .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
    .delete("/pessoas/:id", PessoaController.apagaPessoa)
    .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula);

module.exports = router;