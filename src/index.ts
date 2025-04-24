import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { GetUsersMongodbRepository } from "./repositories/getUsersMongodb.repository";
import { GetUsersController } from "./controllers/get-users/getUsers.controller";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/users", async (req: Request, res: Response) => {
  const getUsersMongodbRepository = new GetUsersMongodbRepository();
  const getUsersController = new GetUsersController(getUsersMongodbRepository);
  const { statusCode, data } = await getUsersController.handle();

  res.status(statusCode).send(data);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
