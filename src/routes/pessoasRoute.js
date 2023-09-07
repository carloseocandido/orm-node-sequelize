const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router()

router
    .get('/pessoas', PessoaController.listarTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.listarPorId)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listarPorMatricula)
    .post('/pessoas', PessoaController.cadastrarPessoas)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:id', PessoaController.atualizarPessoas)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
    .delete('/pessoas/:id', PessoaController.apagarPessoas)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)

module.exports = router