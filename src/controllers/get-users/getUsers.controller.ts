import { OK } from "../helpers";
import { IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}
  async handle() {
    try {
      const users = await this.getUserRepository.getUsers();
      return OK(users);
    } catch {
      return { statusCode: 500, data: "Erro Interno do Servidor" };
    }
  }
}
