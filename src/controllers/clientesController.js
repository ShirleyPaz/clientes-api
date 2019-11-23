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
  Clientes.find({ cpf }, (err, cliente) => {
    if (err) return res.status(500).send(err);
    if (cliente.length > 0) return res.status(200).send(cliente);

    res.status(200).send("Ops! Não encontramos essa cliente.");
  });
};

exports.getShopper = (req, res) => {
  Clientes.find({ comprou: true }, (err, compradores) => {
    if (err) return res.status(500).send(err);
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

exports.deleteById = (request, response) => {
  const idParam = request.params.id;
  Clientes.findById(idParam, (error, cliente) => {
    if (error) {
      return response.status(500).send(error);
    }
    if (!cliente) {
      return response.sendStatus(404);
    }
    cliente.remove(err => {
      if (!err) {
        response.status(200).send("Cliente removido com sucesso");
      }
    });
  });
};

exports.deleteByCpf = (request, response) => {
  const cpf = request.params.cpf;
  Clientes.findOne(
    ({ cpf },
    (err, cliente) => {
      if (err) {
        return response.status(500).send(error);
      }

      if (!cliente) {
        return response.sendStatus(404);
      }

      cliente.remove(err => {
        if (!err) {
          response.status(200).send({ message: "Cliente removido com sucesso" });
        }
      });
    })
  );
};

exports.updateById = (request, response) => {
  const idParam = request.params.id;
  const clienteDoBody = request.body;
  const options = { new: true };

  clientesCollection.findByIdAndUpdate(
    idParam,
    clienteDoBody,
    options,
    (error, cliente) => {
      if (error) {
        return response.status(500).send(error);
      } else if (cliente) {
        // return response.sendStatus(204) // atualizei mas n vou responder nada
        return response.status(200).send(cliente);
      } else {
        return response.sendStatus(404);
      }
    }
  );
};
