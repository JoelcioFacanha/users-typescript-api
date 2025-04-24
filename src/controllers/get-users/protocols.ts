import { User } from "../../models/user.model";
import { IHttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<IHttpResponse<User[]>>;
}

export interface IGetUserRepository {
  getUsers(): Promise<User[]>;
}
