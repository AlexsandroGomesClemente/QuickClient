import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findAll({
    where: {
      email: email,
      password: password,
    },
  });

  if (user.length === 0) {
    return res.status(400).send({
      message: "Usuario não cadastrado",
    });
  }

  if (user.length > 0) {
    return res.status(200).send({
      message: "Usuario logado com sucesso",
      user,
    });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name !== "" && email !== "" && password !== "") {
    User.create({
      name,
      email,
      password,
    });

    return res.status(200).send({
      message: "Usuario criado com sucesso",
      data: {
        name,
        email,
        password,
      },
    });
  }

  return res.status(400).send({
    message: "Erro ao cadastrar o usuario",
  });
};

export const recovery = async (req, res) => {
  const { email } = req.body;

  if (email !== "") {
    const newPassword = parseInt(Math.random() * 9999);

    await User.update(
      { password: newPassword },
      {
        where: {
          email: email,
        },
      }
    );

    return res.status(200).send({
      message: "Nova senha gerada com sucesso",
      data: {
        email,
        newPassword,
      },
    });
  }

  return res.status(400).send({
    message: "Erro ao gerar nova senha",
    data: {
      email,
    },
  });
};

export const profile = async (req, res) => {
  const { id, email, name, password } = req.body;

  if (email !== "", name !== "", password !== "") {
    await User.update(
      { name, email, password},
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).send({
      message: "Dados alterados com sucesso",
    });
  }

  return res.status(400).send({
    message: "Erro ao alterar os dados",
  });

};
