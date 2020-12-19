const { Router } = require("express");
const auth = require("./auth");
const users = require("./users");
const escolas = require("./escolas");
const turmas = require("./turmas");
const alunos = require("./alunos");

module.exports = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send("Api funcionando!");
  });

  //Rotas
  auth(router);
  users(router);
  escolas(router);
  turmas(router);
  alunos(router);

  return router;
};
