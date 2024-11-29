import {Router} from 'express';

import{LoginController} from '../controllers/LoginController.js';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/', loginController.Login);



export { loginRouter}
