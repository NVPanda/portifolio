"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const home_1 = __importDefault(require("./routes/home"));
const about_1 = __importDefault(require("./routes/about"));
const contact_1 = __importDefault(require("./routes/contact"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/', home_1.default);
app.use('/about', about_1.default);
app.use('/contact', contact_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
