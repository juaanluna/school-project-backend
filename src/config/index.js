const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mailer: {
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    secure: false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  },
};
