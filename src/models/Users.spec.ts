import UserController from '@controllers/UserController';
import Users from './Users';

describe('Users', () => {
  it('shoud create an user', () => {
    const user = new Users('wemerson');
    expect(user.getName()).toBe('wemerson');

    const controller = new UserController();
    console.log(controller);
  });
});
