import { success } from '@/middlewares/response.middleware';
import { NextFunction, Request, Response, Router } from 'express';
import UserService from './users.service';

class UsersController {
  public userService: UserService;
  public route: Router;

  constructor() {
    this.userService = new UserService();
    this.route = Router();

    this.route.get(`/`, (req: Request, res: Response, next: NextFunction) => {
      return this.userService.findAllUser().then(success(res)).catch(next);
    });
  }
}

export default UsersController;
