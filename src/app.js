const express = require('express')
const app = express()
const clientsRoutes = require('./routes/clients')
const index = require('./routes/index')

// Define middlewares


// Define rotas
app.use('/', index)
app.use('/clients', clientsRoutes)


module.exports = app

