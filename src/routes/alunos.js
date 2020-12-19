const { Router } = require("express");

const route = Router();

const { Alunos, Turmas } = require("../models");

module.exports = (router) => {
  router.use("/alunos", route);

  const getAlunos = async (req, res, next) => {
    try {
      const aluno = await Alunos.findAll({
        include: [{
          model: Turmas,
          as: 'turmas',
        }]
      });
      return res.json(aluno);
    } catch (err) {
      return next(err);
    }
  };

  const findAluno = async (req, res, next) => {
    const { id } = req.params;
    try {
      const aluno = await Alunos.findOne({ where: { id } });
      return res.json(aluno);
    } catch (err) {
      return next(err);
    }
  };

  const registerAluno = async (req, res, next) => {
    try {
      const aluno = await Alunos.create(req.body);
      res.json(aluno);
    } catch (err) {
      console.log(err);
      return next(err);
    }
  };

  const updateAluno = async (req, res, next) => {
    const { id } = req.params;
    try {
      const aluno = await Alunos.update(req.body, { where: { id } });
      res.json(aluno);
    } catch (err) {
      return next(err);
    }
  };

  const deleteAluno = async (req, res, next) => {
    try {
      const aluno = await Alunos.destroy({
        where: { id: req.params.id },
      });
      res.json(aluno);
    } catch (err) {
      return next(err);
    }
  };

  route.get("/", getAlunos);
  route.get("/:id", findAluno);
  route.post("/", registerAluno);
  route.put("/:id", updateAluno);
  route.delete("/:id", deleteAluno);
};
