import {
  IUpdateUserParams,
  IUpdateUserRepository,
} from "../../controllers/update-user/protocols";
import { IUser, User } from "../../models/user.model";

export class UpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: IUpdateUserParams): Promise<IUser> {
    const upUser = await User.findByIdAndUpdate(id, params);

    if (!upUser) throw new Error("User not updated");

    return {
      id: upUser._id.toHexString(),
      firstName: upUser.firstName,
      lastName: upUser.lastName,
      email: upUser.email,
      password: upUser.password,
    };
  }
}
