import { IUser } from "../../models/user.model";

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
