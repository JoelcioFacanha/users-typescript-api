import { IUser } from "../../models/user.model";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface IDeleteUserController {
  handle(req: IHttpRequest<any>): Promise<IHttpResponse<IUser>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<IUser>;
}
