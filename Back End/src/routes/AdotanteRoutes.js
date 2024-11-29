import Router from "express";
import {AdotanteController} from '../controllers/AdotanteController.js';

//MIDDLEWARE
import { validateUser,validateId} from '../middlewares/MiddlewareGlobal.js';

const adotanteRoutes = Router()
const adotanteController = new AdotanteController();

adotanteRoutes.get('/', adotanteController.buscarAdotantes);
adotanteRoutes.get('/:id', validateId, validateUser,adotanteController.buscarAdotantesPorId); //
adotanteRoutes.post('/', adotanteController.salvarAdotante);

adotanteRoutes.patch('/:id', validateId,validateUser, adotanteController.atualizarAdotante);
adotanteRoutes.delete('/:id', adotanteController.deletarAdotantePorId);

export { adotanteRoutes }

