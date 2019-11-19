const Clientes = require("../models/clientesSchema");

exports.post = (req, res) => {
  let cliente = new Clientes(req.body);

  cliente.save(err => {
    if (err) res.status(500).send(err);

    res.status(201).send({
      status: true,
      mensagem: "Aluna incluida com sucesso."
    });
  });
};

exports.get = (req, res) => {
  Clientes.find((err, clientes) => {
    if (err) res.status(500).send(err);
    res.status(200).send(clientes);
  });
};

exports.getByCpf = (req, res) => {
  const cpf = req.params.cpf;
  Clientes.find((err, clientes) => {
    if (err) return res.status(500).send(err);
    const cliente = clientes.filter(c => c.cpf === cpf);
    if (!cliente)
      return res.status(200).send("Ops! Não encontramos essa cliente.");
    res.status(200).send(cliente);
  });
};

exports.getShopper = (req, res) => {
  Clientes.find((err, clientes) => {
    if (err) return res.status(500).send(err);
    const compradores = clientes.filter(cliente => cliente.comprou === true);
    const clientesRes = compradores.map(comprador => {
      const cliente = {
        nome: comprador.nome,
        email: comprador.email
      };
      return cliente;
    });
    res.status(200).send(clientesRes);
  });
};
