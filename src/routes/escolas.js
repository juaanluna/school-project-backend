const { Router } = require("express");

const route = Router();

const { Escolas } = require("../models");

module.exports = (router) => {
  router.use("/escolas", route);

  const getEscolas = async (req, res, next) => {
    try {
      const escola = await Escolas.findAll();
      return res.json(escola);
    } catch (err) {
      return next(err);
    }
  };

  const findEscola = async (req, res, next) => {
    const { id } = req.params;
    try {
      const escola = await Escolas.findOne({ where: { id } });
      return res.json(escola);
    } catch (err) {
      return next(err);
    }
  };

  const registerEscola = async (req, res, next) => {
    try {
      const escola = await Escolas.create(req.body);
      res.json(escola);
    } catch (err) {
      console.log(err);
      return next(err);
    }
  };

  const updateEscola = async (req, res, next) => {
    const { id } = req.params;
    try {
      const escola = await Escolas.update(req.body, { where: { id } });
      res.json(escola);
    } catch (err) {
      return next(err);
    }
  };

  const deleteEscola = async (req, res, next) => {
    try {
      const escola = await Escolas.destroy({
        where: { id: req.params.id },
      });
      res.json(escola);
    } catch (err) {
      return next(err);
    }
  };

  route.get("/", getEscolas);
  route.get("/:id", findEscola);
  route.post("/", registerEscola);
  route.put("/:id", updateEscola);
  route.delete("/:id", deleteEscola);
};
