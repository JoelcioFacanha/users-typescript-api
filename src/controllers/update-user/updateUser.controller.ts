import { IUser } from "../../models/user.model";
import { BadRequest, InternalServerError, OK } from "../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { IUpdateUserParams, IUpdateUserRepository } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(
    req: IHttpRequest<IUpdateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      const id = req.params.id;
      const body = req.body;

      if (!body) return BadRequest("Missing fields");

      if (!id) return BadRequest("Missing user id");

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate)
        return BadRequest("Some received field is not allowed");

      const user = await this.updateUserRepository.updateUser(id, body);

      return OK(user);
    } catch (error) {
      return InternalServerError("Something went wrong");
    }
  }
}
