const express = require("express");

const gebruikerControllers = require("../controllers/gebruiker-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", gebruikerControllers.getGebruikers);

router.post("/signup", fileUpload.single("image"), gebruikerControllers.signup);
router.post("/login", gebruikerControllers.login);

module.exports = router;
