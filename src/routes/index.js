const express = require('express')
const router = express.Router();

// define rotas para clientes

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Clientes-Api",
        version: "0.0.1"
    })
})

module.exports = router