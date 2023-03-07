"use strict";
/**
 * Root Router
 * Redirections to Routers
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloRouter_1 = __importDefault(require("./HelloRouter"));
const logger_1 = require("../utils/logger");
const GoodbyeRouter_1 = __importDefault(require("./GoodbyeRouter"));
// Server instance
let server = (0, express_1.default)();
// Router instance
let rootRouter = express_1.default.Router();
// Activate for request to http://localhost:8000/api
// GET: http://localhost:8000/api/
rootRouter.get('/', (req, res) => {
    // Send Hello World
    (0, logger_1.LogInfo)('GET: http://localhost:8000/api/');
    res.send('Welcome to APP Express + TS +Swagger + Mongoose-----');
});
// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api
server.use('/hello', HelloRouter_1.default); // http://localhost:8000/api/hello --> helloRouter
server.use('/goodbye', GoodbyeRouter_1.default);
// Add more routes to the App
exports.default = server;
//# sourceMappingURL=index.js.map