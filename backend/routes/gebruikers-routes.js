const express = require("express");

const gebruikerControllers = require("../controllers/gebruiker-controllers");

const router = express.Router();

router.get("/", gebruikerControllers.getGebruikers);

router.post("/signup", gebruikerControllers.signup);
router.post("/login", gebruikerControllers.login);

module.exports = router;
