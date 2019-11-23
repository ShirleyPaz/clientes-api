const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

// define rotas para clientes
router.get("/", controller.get);
router.get("/compradores", controller.getShopper);
router.get("/:cpf", controller.getByCpf);
router.post("/", controller.post);

router.delete("/deletar/:id", controller.deleteById);
router.delete("/deletar/cpf/:cpf", controller.deleteByCpf);
// nao faremos o PUT
router.patch("/atualizar/:id", controller.updateById);

module.exports = router;
