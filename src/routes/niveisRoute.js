const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();
router
    .get("/niveis", NivelController.listaTodosOsNiveis)
    .get("/niveis/:id", NivelController.listaNivelPorId)
    .post("/niveis", NivelController.cadastraNivel)
    .post("/niveis/:id/restaura", NivelController.restaurarNivel)
    .put("/niveis/:id", NivelController.apagaNivel)
    .delete("/niveis/:id", NivelController.apagaNivel);
    
module.exports = router;