import { createExpressServer } from "routing-controllers";
import LeadsController from "./controller/LeadsController";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

console.info(`Starting server on http://localhost:${PORT}`);

const app = createExpressServer({
  controllers: [LeadsController], // we specify controllers we want to use
});

app.listen(PORT);
