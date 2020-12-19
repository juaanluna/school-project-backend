const { Router } = require("express");
const { sendMailAsync } = require("../services/mailer");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const route = Router();

const { Users } = require("../models");

module.exports = (router) => {
  router.use("/auth", route);

  const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ where: { email } });

      if (!user) {
        res.json({ error: 'Email não encontrado' })
        return
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        return res.json({ error: "Senha invalida" });
      }
      res.json(user);
    } catch (err) {
      return next(err);
    }
  };

  const forgotPassword = async (req, res, next) => {
    const { email } = req.body;
    try {
      const user = await Users.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
      const code = crypto.randomBytes(3).toString("hex");
      await Users.update(
        {
          recoveryCode: code,
        },
        { where: { email } }
      );

      await sendMailAsync({
        to: email,
        subject: `seu codigo é ${code}`,
        text: `Esqueceu sua senha? Não tem problema! Essa é sua senha de recuperação: ${code}`,
      });
      return res.status(200).json({});
    } catch (err) {
      return res.status(400).json({ error: 'falha ao enviar e-mail' })
    }
  };

  const resetPassword = async (req, res, next) => {
    const { email, newPassword, recoveryCode } = req.body;
    console.log(req.body, 'aaa')
    const salt = bcrypt.genSaltSync(10);
    try {
      const user = await Users.findOne({ where: { email, recoveryCode } });
      if (!user) {
        res.json({ error: "Usuário não encontrado" });
      }
      user.password = bcrypt.hashSync(newPassword, salt);
      if (user.changed()) await user.save();
      return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  };
  route.post("/signin", signIn);
  route.post("/forgot-password", forgotPassword);
  route.post("/reset-password", resetPassword);
};
