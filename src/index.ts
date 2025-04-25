import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./database/mongodb";
import { GetUsersMongodbRepository } from "./repositories/get-users/getUsers.repository";
import { GetUsersController } from "./controllers/get-users/getUsers.controller";
import { CreateUserRepository } from "./repositories/create-user/createUser.repository";
import { CreateUserController } from "./controllers/create-user/createUser.controller";
import { UpdateUserRepository } from "./repositories/update-user/updateUser.repository";
import { UpdateUserController } from "./controllers/update-user/updateUser.controller";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

connectMongoDB();

app.get("/users", async (req: Request, res: Response) => {
  const getUsersMongodbRepository = new GetUsersMongodbRepository();
  const getUsersController = new GetUsersController(getUsersMongodbRepository);
  const { statusCode, data } = await getUsersController.handle();

  res.status(statusCode).send(data);
});

app.post("/users", async (req: Request, res: Response) => {
  const createUserMongodbRepository = new CreateUserRepository();
  const createUsersController = new CreateUserController(
    createUserMongodbRepository
  );

  const { statusCode, data } = await createUsersController.handle({
    body: req.body,
  });

  res.status(statusCode).send(data);
});

app.patch("/users/:id", async (req: Request, res: Response) => {
  const updateUserRepository = new UpdateUserRepository();
  const updateUserController = new UpdateUserController(updateUserRepository);

  const { statusCode, data } = await updateUserController.handle({
    params: req.params,
    body: req.body,
  });

  res.status(statusCode).send(data);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
