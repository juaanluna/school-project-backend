const nodemailer = require("nodemailer");
const config = require("../config");

let transporter = nodemailer.createTransport(config.mailer);

const sendMailAsync = async (mailOptions) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        const error = new Error("Falha ao enviar e-mail");
        error.errors = [{ message: "Falha ao enviar e-mail", path: "mailer" }];
        error.status = 500;

        return reject(error);
      }

      return resolve(info);
    });
  });

module.exports = { transporter, sendMailAsync };
