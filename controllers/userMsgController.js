import { UserMsg } from "../models/userMsgModel.js";
import { sendEmail } from "../utils/sendMail.js";

export const sendMsg = async (req, res) => {
    try {
        // console.log("7");
        const { name, email, msg } = req.body;

        const message = await UserMsg.create({
            name,
            email,
            message: msg,
        });

        const message1 = `${name} Your message has been send to Pritam Paul.\nYour Message : ${msg}`;

        await sendEmail({
            email,
            subject: `Your message confirmation`,
            message: message1,
        });
        const userMsg = `Name: ${name} \nEmail id: ${email}\nMessage: ${msg}`;
        await sendEmail({
            email: "pythonpritam@gmail.com",
            subject: `Portfolio Messages`,
            message: userMsg,
        });
        res.status(201).json({
            success: true,
            message,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
