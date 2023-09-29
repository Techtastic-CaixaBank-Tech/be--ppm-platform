import { Router } from "express";
import { autoInjectable } from "tsyringe";

export default class HealthController {

    private router: Router;

    constructor() {
        this.router = Router();
    }

    routes() {
        this.router.get("/", async (req, res) => {
            return res
                .status(200)
                .send("Hola mundo!");
        });

        return this.router;
    }
}