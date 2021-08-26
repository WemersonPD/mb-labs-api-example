import { Request, Response } from 'express';
import UserRepository from '@repository/UserRepository';

class UserController {
  public async create (request: Request, response: Response): Promise<Response> {
    // const { body } = request;
    const user = await UserRepository.createUser({
      name: 'Wemerson Patrick',
      email: 'wemersondev@gmail.com',
      category: 'Decoração',
      businessName: 'Wenerson Dev',
      status: true
    });
    console.log(user);

    return response.json({
      criado: true,
      user
    });
  }
}

export default new UserController();
