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

// this.router.get(`${this.path}/:id`, this.usersController.getUserById);
// this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
// this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
// this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);

//   public getUserById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId: string = req.params.id;
//       const findOneUserData: User = await this.userService.findUserById(userId);

//       res.status(200).json({ data: findOneUserData, message: 'findOne' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public createUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userData: CreateUserDto = req.body;
//       const createUserData: User = await this.userService.createUser(userData);

//       res.status(201).json({ data: createUserData, message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public updateUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId: string = req.params.id;
//       const userData: CreateUserDto = req.body;
//       const updateUserData: User = await this.userService.updateUser(userId, userData);

//       res.status(200).json({ data: updateUserData, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId: string = req.params.id;
//       const deleteUserData: User = await this.userService.deleteUser(userId);

//       res.status(200).json({ data: deleteUserData, message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
// }

export default UsersController;
