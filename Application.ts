import express from "express";
import dotenv from "dotenv";
import HealthController from "./src/main/health/infraestructure/controllers/HealthController";

const app = express();

dotenv.config({ path: `enviroments/${process.env.ENV}.env` });

app.set("port", process.env.APPLICATION_PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(app.get("port"));

app.use("/health", new HealthController().routes());

console.log("App listening: OK");
console.log(`http://localhost:${app.get("port")}`);