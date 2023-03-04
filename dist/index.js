"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first Route of the APP
app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to APP Express + TS +Swagger + Mongoose-----');
});
app.get('/hello', (req, res) => {
    // Send Hello World
    res.send('Hello World');
});
// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map