const { Router } = require("express");

const route = Router();

const { Turmas, Escolas } = require("../models");

module.exports = (router) => {
  router.use("/turmas", route);

  const getTurmas = async (req, res, next) => {
    try {
      const turma = await Turmas.findAll({
        include: [{
          model: Escolas,
          as: 'escolas',
        }]
      });
      return res.json(turma);
    } catch (err) {
      return next(err);
    }
  };

  const findTurma = async (req, res, next) => {
    const { id } = req.params;
    try {
      const turma = await Turmas.findOne({ where: { id } });
      return res.json(turma);
    } catch (err) {
      return next(err);
    }
  };

  const registerTurma = async (req, res, next) => {
    try {
      const turma = await Turmas.create(req.body);
      res.json(turma);
    } catch (err) {
      console.log(err);
      return next(err);
    }
  };

  const updateTurma = async (req, res, next) => {
    const { id } = req.params;
    try {
      const turma = await Turmas.update(req.body, { where: { id } });
      res.json(turma);
    } catch (err) {
      return next(err);
    }
  };

  const deleteTurma = async (req, res, next) => {
    try {
      const turma = await Turmas.destroy({
        where: { id: req.params.id },
      });
      res.json(turma);
    } catch (err) {
      return next(err);
    }
  };

  route.get("/", getTurmas);
  route.get("/:id", findTurma);
  route.post("/", registerTurma);
  route.put("/:id", updateTurma);
  route.delete("/:id", deleteTurma);
};
