import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { IUser, User } from "../../models/user.model";

export class GetUsersMongodbRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const result = await User.find();
    const users: IUser[] = result.map((us) => {
      return {
        id: us._id.toString(), // Converte o ObjectId para uma string e atribui ao 'id'
        firstName: us.firstName,
        lastName: us.lastName, // Aqui você provavelmente queria usar us.lastName
        email: us.email,
        password: us.password,
      };
    });

    return users;
  }
}
