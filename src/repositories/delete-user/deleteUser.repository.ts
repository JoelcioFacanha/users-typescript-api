import { Types } from "mongoose";
import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { IUser, User } from "../../models/user.model";

export class DeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<IUser> {
    const objectId = new Types.ObjectId(id);

    const result = await User.findOneAndDelete(objectId);

    if (!result) throw new Error("User not deleted");

    return {
      id: result._id.toHexString(),
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      password: result.password,
    };
  }
}
