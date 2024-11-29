import { Router } from "express";
import { PetHistoryController } from "../controllers/PetHistoryController.js";

const petHistoryRouter = Router();
const historicoController = new PetHistoryController();

petHistoryRouter.get("/:id", historicoController.getHistoricoById);
petHistoryRouter.get("/item/:id_pet", historicoController.getHistoricoByPetId);

petHistoryRouter.post("/", historicoController.addHistoricoToPet);

petHistoryRouter.put("/:id", historicoController.updateHistoricoById);

petHistoryRouter.delete("/:id", historicoController.deleteHistoricoById);

export { petHistoryRouter };
