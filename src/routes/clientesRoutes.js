const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

// define rotas para clientes
router.get("/", controller.get);
router.get("/compradores", controller.getShopper);
router.get("/:cpf", controller.getByCpf);
router.post("/", controller.post);

module.exports = router;
