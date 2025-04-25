import { IUser } from "../../models/user.model";
import { BadRequest, InternalServerError, OK } from "../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(req: IHttpRequest<any>): Promise<IHttpResponse<IUser>> {
    try {
      const id = req?.params?.id;

      if (!id) return BadRequest("Missing user id");

      const user = await this.deleteUserRepository.deleteUser(id);

      return OK(user);
    } catch (error) {
      return InternalServerError("Something went wrong");
    }
  }
}
