"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');  // commonjs
const express_1 = __importDefault(require("express")); // import/export: ESModules => Compile gen commonjs
const morgan_1 = __importDefault(require("morgan"));
const diariesRouter_1 = __importDefault(require("./routes/diariesRouter"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware: transform req.body to JSON
app.use((0, morgan_1.default)('dev'));
app.use('/api/diaries', diariesRouter_1.default);
app.get('/ping', (_, res) => {
    console.log('Someone pinged here!');
    res.send('Pong');
});
app.listen(PORT, () => {
    console.log('Server running at port:', PORT);
});
