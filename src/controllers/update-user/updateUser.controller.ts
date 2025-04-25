import { IUser } from "../../models/user.model";
import { IHttpRequest, IHttpResponse } from "../protocols";
import {
  IUpdateUserController,
  IUpdateUserParams,
  IUpdateUserRepository,
} from "./protocols";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(req: IHttpRequest<any>): Promise<IHttpResponse<IUser>> {
    try {
      const id = req.params.id;
      const body = req.body;

      if (!id) return { statusCode: 400, data: "Missing user id" };

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate)
        return { statusCode: 400, data: "Some received field is not allowed" };

      const user = await this.updateUserRepository.updateUser(id, body);

      return { statusCode: 200, data: user };
    } catch (error) {
      return { statusCode: 500, data: "Something went wrong" };
    }
  }
}
