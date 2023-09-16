const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();
router
    .get("/niveis", NivelController.pegaTodosOsNiveis)
    .get("/niveis/:id", NivelController.listarPorId)
    .post("/niveis", NivelController.cadastrarNiveis)
    .put("/niveis/:id", NivelController.atualizarNiveis)
    .delete("/niveis/:id", NivelController.apagarNiveis);
    
module.exports = router;