const express = require('express')
const router = express.Router();
const clientsController = require('../controllers/clientsController')

// define rotas para clientes

router.get('/', clientsController.get)


module.exports = router