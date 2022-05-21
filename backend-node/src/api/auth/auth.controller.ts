import AuthService from '@/api/auth/auth.service';
import { CreateUserDto } from '@/api/user/users.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import { success } from '@/middlewares/response.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { NextFunction, Request, Response, Router } from 'express';

class AuthController {
  authService: AuthService;
  routes: Router;

  constructor() {
    this.authService = new AuthService();
    this.routes = Router();

    this.routes.post(`signup`, validationMiddleware(CreateUserDto, 'body'), (req: Request, res: Response, next: NextFunction) =>
      this.authService
        .signup(req.body as CreateUserDto)
        .then(success(res))
        .catch(next),
    );

    this.routes.post(`login`, validationMiddleware(CreateUserDto, 'body'), (req: Request, res: Response, next: NextFunction) =>
      this.authService
        .login(req.body as CreateUserDto)
        .then(({ cookie, findUser }) => {
          res.setHeader('Set-Cookie', [cookie]);
          success(res)(findUser);
        })
        .catch(next),
    );

    this.routes.post(`logout`, authMiddleware, async (req: Request, res: Response) => {
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      success(res, 201)({});
    });
  }
}

export default AuthController;
