import { IUser } from "../../models/user.model";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(req: IHttpRequest<ICreateUserParams>): Promise<IHttpResponse<IUser>>;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUser>;
}
