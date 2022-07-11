const models = require("../models");
const buildTranslations = require("../services/buildTranslations");

class TraductionsController {
  static browse = (req, res) => {
    models.traductions
      .findAll()
      .then(([rows]) => {
        const traductions = buildTranslations(rows);

        res.send(traductions);
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TraductionsController;
