import { IUser } from "../../models/user.model";

export interface IUpdateUserParams {
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUpdateUserController {}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<IUser>;
}
