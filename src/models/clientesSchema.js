const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  nome: { type: String },
  email: { type: String },
  cpf: { type: Number },
  dataNascimento: { type: Date },
  estadoCivil: { type: String },
  telefone: { type: Number },
  comprou: { type: Boolean }
});

const Clients = mongoose.model("Clients", clientsSchema);

module.exports = Clients;
