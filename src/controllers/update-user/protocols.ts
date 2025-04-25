import { IUser } from "../../models/user.model";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface IUpdateUserParams {
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUpdateUserController {
  handle(req: IHttpRequest<any>): Promise<IHttpResponse<IUser>>;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<IUser>;
}
