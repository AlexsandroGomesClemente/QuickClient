import { Model, DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";

const Clients = sequelize.define(
  "Clients",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_usuario: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    data_hora_cadastro: {
      type: DataTypes.DATE,
    },
    codigo: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    cpf_cnpj: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING,
    },
    logradouro: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    numero: {
      type: DataTypes.STRING,
    },
    bairro: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    uf: {
      type: DataTypes.STRING,
    },
    complemento: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    limite_credito: {
      type: DataTypes.FLOAT,
    },
    validate: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "clients",
    timestamps: false,
  }
);

export default Clients;
