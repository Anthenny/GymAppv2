const express = require("express");
const { check } = require("express-validator");

const logboekControllers = require("../controllers/logboek-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/:logId", logboekControllers.getLogById);

/// deze
router.get("/gebruiker/:gebruikerId", logboekControllers.getLogsByUserId);

router.use(checkAuth);
router.post(
  "/",
  [check("titel").not().isEmpty(), check("beschrijving").not().isEmpty().isLength({ min: 3 })],
  logboekControllers.createLog
);

router.patch(
  "/:logId",
  [check("titel").not().isEmpty(), check("beschrijving").not().isEmpty().isLength({ min: 3 })],
  logboekControllers.updateLog
);

router.delete("/:logId", logboekControllers.deleteLog);

module.exports = router;
