import { LogSuccess } from "../utils/logger";
import { IGoodbyeController } from "./interfaces";
import { BasicGoodbyeResponse } from "./types";

export class GoodbyeController implements IGoodbyeController {
    public date: Date = new Date();
    public async getMessage(name?: string): Promise<BasicGoodbyeResponse> {
        LogSuccess('[/api/goodbye] Get Request');

        return {
            message: `Goodbye, ${name || "World!"}`,
            Date: `${new Date(Date.now()).toLocaleDateString()}`,
        }

    } 
    
}