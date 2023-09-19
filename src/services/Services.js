const database = require("../models");

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async listaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }
}

module.exports = Services;