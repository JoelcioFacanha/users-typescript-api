import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { IUser, User } from "../../models/user.model";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const result = await User.insertOne(params);

    if (!result) throw new Error("User not created");

    return {
      id: result._id.toHexString(),
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      password: result.password,
    };
  }
}
