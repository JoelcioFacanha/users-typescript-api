import validator from "validator";
import { IUser } from "../../models/user.model";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepository } from "./protocols";
import { BadRequest, Created, InternalServerError } from "../helpers";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(
    req: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      if (!req.body) {
        return BadRequest("Please specify body");
      }

      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!req?.body?.[field as keyof ICreateUserParams]?.length) {
          return BadRequest(`Field ${field} is required!`);
        }
      }

      const emailIsValid = validator.isEmail(req.body.email);

      if (!emailIsValid) return BadRequest("E-mail is invalid!");

      const body: ICreateUserParams = req.body;

      const newUser = await this.createUserRepository.createUser(body);

      return Created(newUser);
    } catch {
      return InternalServerError("Somenthing went wrong");
    }
  }
}
