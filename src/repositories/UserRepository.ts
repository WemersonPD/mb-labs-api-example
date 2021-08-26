import { UserDto } from '@dtos/UserDto';
import models from '@models/';
const { User } = models;

class UserRespository {
  public async createUser (user: UserDto) {
    return await User.create(user);
  };
}

export default new UserRespository();
