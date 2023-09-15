"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const formatFormData_1 = require("./formatFormData");
dotenv.config();
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/send-email', async (req, res) => {
    const formData = req.body;
    let transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
    let mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.MAIL_RECIPIENT,
        subject: 'Formulário de Contato',
        html: (0, formatFormData_1.formatFormDataToHtml)(formData)
    };
    console.log('User:', process.env.GMAIL_USER);
    console.log('Password:', process.env.GMAIL_PASS ? 'Password is set' : 'Password is NOT set');
    console.log('Recipient:', process.env.MAIL_RECIPIENT);
    try {
        await transporter.sendMail(mailOptions);
        console.log("🚀 ~ file: index.ts:43 ~ app.post ~ transporter:", transporter);
        res.status(200).send('Email sent successfully');
    }
    catch (error) {
        console.log("🚀 ~ file: index.ts:44 ~ app.post ~ error:", error);
        res.status(500).send('Error sending email');
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
