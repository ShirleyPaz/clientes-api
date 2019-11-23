const express = require('express')
const router = express.Router();

// define rotas para clientes

router.get('/', (req, res) => {
    res.redirect(301, '/clientes')
})

module.exports = router