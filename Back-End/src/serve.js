import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRouter from './routers/index.js'

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(mainRouter);

app.use((req, res) => {
  res.status(404).send("Rota não encontrada!");
});


app.listen(process.env.PORT, () =>
  console.log("Servidor rodando na porta: ", process.env.PORT, "✔")
);
