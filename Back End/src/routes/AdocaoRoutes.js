import Router from "express";

import { AdocaoController } from "../controllers/AdocaoController.js";

const adocaoRoutes = Router();
const adocaoController = new AdocaoController();

//Adoção
//Rota para listar todas as adoções (GET)
adocaoRoutes.get('/', adocaoController.buscarAdocoes);
//Rota para buscar adoção por Id (GET)
adocaoRoutes.get('/:id', adocaoController.buscarAdocaoPorId);
//Rota para salvar adoção (POST)
adocaoRoutes.post('/:id', adocaoController.salvarAdocao);
//Rota para excluir adoção (DELETE)
adocaoRoutes.delete('/:id', adocaoController.excluirAdocao);


export { adocaoRoutes }
