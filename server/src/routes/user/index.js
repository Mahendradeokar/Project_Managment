import { Router } from 'express';

import userController from './controller.js';

const UserRouter = Router();

UserRouter.post('/register', userController.register);

export default UserRouter;
