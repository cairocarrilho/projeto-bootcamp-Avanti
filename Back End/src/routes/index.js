import {Router} from 'express';
import { petRoutes } from "./PetRoutes.js";
import { petHistoryRouter } from "./PetHistoricoMedicoRoutes.js";
import { adotanteRoutes } from "./AdotanteRoutes.js";
import { adocaoRoutes } from "./AdocaoRoutes.js";
import { loginRouter } from "./AuthRoute.js";

const router = Router();

router.use("/pet", petRoutes);

router.use("/pet-historico", petHistoryRouter);

//YURI
router.use('/adotante', adotanteRoutes);

//GLEICE
router.use('/adocao', adocaoRoutes);

router.use('/login',loginRouter)

export { router };
