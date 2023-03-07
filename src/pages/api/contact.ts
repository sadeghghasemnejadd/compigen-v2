const nodemailer = require("nodemailer");
require("dotenv").config();
export default function (req: any, res: any) {
  const transport = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "compigen.official@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "compigen.official@gmail.com",
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
    else console.log(info);
  });
  const mailData2 = {
    from: "compigen.official@gmail.com",
    to: "compigen.official@gmail.com",
    subject: `compigen website From ${req.body.name}`,
    text: req.body.message,
    html: `<h1>${req.body.message}</h1>`,
  };
  transport.sendMail(mailData2, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  console.log(req.body);
  res.status(200);
}
