import cors from "cors"
import express from "express"
import { router } from "./routes/index.js";

const app = express();
app.use(cors())
app.use(express.json());

app.use(router)

app.listen(3000, () => {
  console.log(`Servidor rodando na porta http://localhost:3000`);
});
