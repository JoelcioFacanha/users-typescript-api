import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Api funcionando!" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
