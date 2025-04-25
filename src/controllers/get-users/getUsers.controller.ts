import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}
  async handle() {
    try {
      const users = await this.getUserRepository.getUsers();
      const response = { statusCode: 200, data: users };
      return response;
    } catch {
      return { statusCode: 500, data: "Erro Interno do Servidor" };
    }
  }
}
