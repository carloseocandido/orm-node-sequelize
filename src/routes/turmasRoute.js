const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();
router
    .get("/turmas", TurmaController.listaTodasAsTurmas)
    .get("/turmas/:id", TurmaController.listaTurmaPorId)
    .post("/turmas", TurmaController.cadastraTurma)
    .post("/turmas/:id/restaura", TurmaController.restauraTurma)
    .put("/turmas/:id", TurmaController.atualizaTurma)
    .delete("/turmas/:id", TurmaController.apagaTurma);

module.exports = router;