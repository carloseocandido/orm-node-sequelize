const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.listarPorId)
    .post('/turmas', TurmaController.cadastrarTurma)
    .put('/turmas/:id', TurmaController.atualizarTurma)
    .delete('/turmas/:id', TurmaController.apagarTurma)

module.exports = router