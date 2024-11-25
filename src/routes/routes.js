const pessoasController = require("../controller/pessoasController");
const professoresController = require("../controller/professoresController");
const alunosController = require("../controller/alunosController");
const clientesController = require("../controller/clientesController");

const express = require("express");
const routes = express.Router();

routes.get("/pessoas", pessoasController.index);
routes.post("/pessoas", pessoasController.create);

routes.get("/professores", professoresController.index);
routes.post("/professores", professoresController.create);

routes.get("/alunos", alunosController.index);
routes.post("/alunos", alunosController.create);

routes.get("/clientes", clientesController.index);
routes.post("/clientes", clientesController.create);

module.exports = routes;
