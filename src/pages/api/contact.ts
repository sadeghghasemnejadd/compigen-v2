require("dotenv").config();
const nodemailer = require("nodemailer");
import IMailData from "@/models/MailData";
import INextApiRequest from "@/models/NextApiRequest";
import ITransport from "@/models/TransportNode";
export default function (req: INextApiRequest, res: any) {
  const transportData: ITransport = {
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_ADDRESS!,
      pass: process.env.PASSWORD!,
    },
    secure: true,
  };
  const transport = nodemailer.createTransport(transportData);
  const mailData: IMailData = {
    from: process.env.EMAIL_ADDRESS!,
    to: req.body.email,
    subject: `Contact with me message`,
    text: req.body.message,
    html: `<h3>Hello dear ${req.body.name}</h3>
    <p>thank you for your message</p>
    <h3>your message: ${req.body.message}</h3>
    <p>Sincerely</p>
    <p>Sadegh Ghasemnejad</p>
    <p>Compigen compony</p>
    <p>+989912330923</p>
    <a href="mailto:${process.env.EMAIL_ADDRESS}">${process.env.EMAIL_ADDRESS}</a>
    <a href="compigen.com">compigen.com</a>
    <a href="https://www.linkedin.com/in/sadegh-ghasemnejad-a4882622a">LinkedIn</a>
    `,
  };

  transport.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else {
      res.status(200);
      res.json({ message: "ok" });
    }
  });
  const mailData2: IMailData = {
    from: process.env.EMAIL_ADDRESS!,
    to: process.env.EMAIL_ADDRESS!,
    subject: `compigen website From ${req.body.name}`,
    text: req.body.message,
    html: `<h1>${req.body.message}</h1>`,
  };
  transport.sendMail(mailData2, function (err: any, info: any) {
    if (err) console.log(err);
    else {
      res.status(200);
      res.json({ message: "ok" });
    }
  });
  res.status(200);
}
