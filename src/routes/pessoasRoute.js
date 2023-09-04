const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router()

router
    .get('/pessoas', PessoaController.listarTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.listarPorId)
    .post('/pessoas', PessoaController.cadastrarPessoas)
    .put('/pessoas/:id', PessoaController.atualizarPessoas)
    .delete('/pessoas/:id', PessoaController.apagarPessoas)

module.exports = router