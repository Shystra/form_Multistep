import express from 'express';
import {Request, Response} from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 3001;

type FormData = {
    firstName: string;
    lastName: string;
};

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req:Request, res:Response) => {
    const formData: FormData = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS

        }
    });


    let mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.MAIL_RECIPIENT,
        subject: 'New message from contact form',
        text: JSON.stringify(formData)
    };
    // console.log('User:', process.env.GMAIL_USER);
    // console.log('Password:', process.env.GMAIL_PASS ? 'Password is set' : 'Password is NOT set');
    // console.log('Recipient:', process.env.MAIL_RECIPIENT);


    try {
        await transporter.sendMail(mailOptions);
        console.log("🚀 ~ file: index.ts:43 ~ app.post ~ transporter:", transporter)
        
        res.status(200).send('Email sent successfully');

    } catch (error) {
        console.log("🚀 ~ file: index.ts:44 ~ app.post ~ error:", error)
        res.status(500).send('Error sending email')
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});