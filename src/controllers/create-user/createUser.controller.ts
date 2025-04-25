import { IUser } from "../../models/user.model";
import { IHttpRequest, IHttpResponse } from "../protocols";
import {
  ICreateUserController,
  ICreateUserParams,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(
    req: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      if (!req.body) {
        return { statusCode: 400, data: "Please specify body" };
      }

      const body: ICreateUserParams = req.body;

      const newUser = await this.createUserRepository.createUser(body);

      return { statusCode: 200, data: newUser };
    } catch {
      return { statusCode: 500, data: "Somenthing went wrong" };
    }
  }
}
