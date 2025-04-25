import { IUser } from "../../models/user.model";
import { IHttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<IHttpResponse<IUser[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
