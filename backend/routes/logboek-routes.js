const express = require("express");
const { check } = require("express-validator");

const logboekControllers = require("../controllers/logboek-controllers");

const router = express.Router();

router.get("/:logId", logboekControllers.getLogById);

router.get("/gebruiker/:gebruikerId", logboekControllers.getLogsByUserId);

router.post(
  "/workout",
  [check("titel").not().isEmpty(), check("beschrijving").not().isEmpty().isLength({ min: 5 })],
  logboekControllers.createWorkoutLog
);

router.patch(
  "/:logId",
  [check("titel").not().isEmpty(), check("beschrijivng").not().isEmpty().isLength({ min: 5 })],
  logboekControllers.updateLog
);

router.delete("/:logId", logboekControllers.deleteLog);

module.exports = router;
