import { IGetUserRepository } from "../controllers/get-users/protocols";
import { User } from "../models/user.model";

export class GetUsersMongodbRepository implements IGetUserRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Teste 1",
        lastName: "teste 1",
        email: "teste@gmail.com",
        password: "jfdlfjajfkaflkjlkjo",
      },
    ];
  }
}
