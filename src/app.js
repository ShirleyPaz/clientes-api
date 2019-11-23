const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

mongoose.connect("mongodb+srv://admin:admin123@cluster0-nqk7b.mongodb.net/clientes", {
  useNewUrlParser: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "conection error:"));
db.once("open", () => {
  console.log("conexão bem feita");
});

// Rotas
const clientesRoutes = require("./routes/clientesRoutes");
const index = require("./routes/index");

// Define middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

// Define rotas
app.use("/", index);
app.use("/clientes", clientesRoutes);

module.exports = app;
