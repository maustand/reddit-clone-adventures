import { Router } from 'express';
import UserController from './user/users.controller';

class ApiRouter {
  path: string;
  apiVersion: string;
  router: Router;
  userController: UserController;

  constructor() {
    this.apiVersion = 'v1';
    this.path = `/api/${this.apiVersion}/`;
    this.router = Router();
    this.userController = new UserController();

    this.router.use(`${this.path}users`, this.userController.route);
  }
}

export default ApiRouter;
