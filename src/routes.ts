import { Router } from 'express';
import { SurveysController } from './controllers/surveysController';
import { UserController } from './controllers/userController';

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);
router.get("/users", userController.show);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };
