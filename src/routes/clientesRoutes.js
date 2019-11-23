const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

//apidoc -i src/ -o public/apidoc
/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * *
 * @apiSuccess {Object[]} clientes Lista de Clientes
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 *
 */

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
