import { IUser } from "../../models/user.model";

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<IUser>;
}
