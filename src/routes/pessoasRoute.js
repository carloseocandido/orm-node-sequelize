const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router()

router
    .get('/pessoas', PessoaController.listarTodasAsPessoas)

module.exports = router