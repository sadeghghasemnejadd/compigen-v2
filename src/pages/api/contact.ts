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
    subject: `compigen website From ${req.body.name}`,
    text: req.body.message,
    html: `<h1>${req.body.message}</h1>`,
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
