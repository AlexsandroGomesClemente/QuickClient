import Clients from "../models/Clients.js";

export const getAllClients = async (req, res) => {
  const clients = await Clients.findAll();

  if (clients.length === 0) {
    return res.status(400).send({
      message: "Sem Clients cadastrado",
    });
  }

  if (clients.length > 0) {
    return res.status(200).send({
      message: "Clients cadastrados",
      clients,
    });
  }
};

export const newClient = async (req, res) => {
  const {
    name,
    cpf_cnpj,
    cep,
    logradouro,
    endereco,
    numero,
    bairro,
    cidade,
    uf,
    complemento,
    telefone,
    limite_credito,
  } = req.body;

  const dateAtual = new Date();

  await Clients.create({
    id_usuario: parseInt(Math.random() * 800),
    data_hora_cadastro: dateAtual,
    codigo: parseInt(Math.random() * 1100),
    name,
    cpf_cnpj,
    cep,
    logradouro,
    endereco,
    numero,
    bairro,
    cidade,
    uf,
    complemento,
    telefone,
    limite_credito,
    validate: new Date(dateAtual.getTime() + 10 * 24 * 60 * 60 * 1000),
  });

  return res.status(200).send({
    message: "Cliente criado com sucesso",
  });
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;

  const clientRemove = await Clients.findByPk(id);

  if (clientRemove) {
    await clientRemove.destroy();

    return res.status(200).send({
      message: "Client deletado com sucesso",
    });
  }

  return res.status(400).send({
    message: "Erro ao deletar o cliente",
  });
};

export const putClient = async (req, res) => {
  const {
    id,
    name,
    cpf_cnpj,
    cep,
    logradouro,
    endereco,
    numero,
    bairro,
    cidade,
    uf,
    complemento,
    telefone,
    limite_credito,
  } = req.body;

  await Clients.update(
    {
      name,
      cpf_cnpj,
      cep,
      logradouro,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      complemento,
      telefone,
      limite_credito,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return res.status(200).send({
    message: "Dados alterados com sucesso",
  });
};
