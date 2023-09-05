import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) =>{
    const transpoter = createTransport(
        {
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            auth: {
              user: process.env.SMPT_USER,
              pass: process.env.SMPT_PASS
            }
          }
    );


    await transpoter.sendMail({
        to, 
        subject, 
        text, 
       
    });
}