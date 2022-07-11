const express = require("express");

const { TraductionsController } = require("./controllers");

const router = express.Router();

router.get("/traductions", TraductionsController.browse);

module.exports = router;
