import { IUser } from "../../models/user.model";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(req: IHttpRequest<any>): Promise<IHttpResponse<IUser>> {
    try {
      const id = req?.params?.id;

      if (!id) return { statusCode: 400, data: "Missing user id" };

      const user = await this.deleteUserRepository.deleteUser(id);

      return { statusCode: 200, data: user };
    } catch (error) {
      return { statusCode: 500, data: "Something went wrong" };
    }
  }
}
