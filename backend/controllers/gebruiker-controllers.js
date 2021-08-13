const HttpError = require("../models/http-error");
const Gebruiker = require("../models/gebruiker");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getGebruikers = async (req, res, next) => {
  let gebruikers;
  try {
    gebruikers = await Gebruiker.find({}, "-wachtwoord");
  } catch (err) {
    return next(new HttpError("Kon niet alle gebruikers laden, probeer het opnieuw", 500));
  }
  if (!gebruikers) return next(HttpError("Geen gebruikers gevonden", 404));

  res.status(200).json({ gebruikers: gebruikers });
};

exports.signup = async (req, res, next) => {
  const { naam, wachtwoord, email, bevestigWachtwoord } = req.body;

  let existingGebruiker;
  try {
    existingGebruiker = await Gebruiker.findOne({ email });
  } catch (err) {
    next(new HttpError("Kon u niet registreren, probeer het opnieuw", 500));
  }

  if (existingGebruiker)
    return next(new HttpError("Kon geen gebruiker maken email bestaat al", 422));

  if (wachtwoord.trim() !== bevestigWachtwoord.trim())
    return next(new HttpError("Wachtwoord moet matchen"));

  if (!req.file) return next(new HttpError("Kon niet registreren selecteer aub een image"));

  let hashedWachtwoord;
  hashedWachtwoord = await bcrypt.hash(wachtwoord, 12);

  const createdGebruiker = new Gebruiker({
    naam,
    email,
    wachtwoord: hashedWachtwoord,
    image: req.file.path,
    logs: [],
  });

  try {
    await createdGebruiker.save();
  } catch (err) {
    return next(new HttpError("Kon gebruiker niet registreren", 500));
  }

  res.status(201).json({ gebruiker: createdGebruiker });
};

exports.login = async (req, res, next) => {
  const { email, wachtwoord } = req.body;

  let existingGebruiker;

  try {
    existingGebruiker = await Gebruiker.findOne({ email });
  } catch (err) {
    return next(new HttpError("inloggen is niet gelukt probeer het later nog een keer.", 500));
  }
  if (!existingGebruiker) return next(new HttpError("Kon niet inloggen geen geldige info", 401));

  let isValidWachtwoord = false;
  try {
    isValidWachtwoord = await bcrypt.compare(wachtwoord, existingGebruiker.wachtwoord);
  } catch (err) {
    return next(new HttpError("Kan niet inloggen, uw wachtwoord matched niet", 500));
  }

  if (!isValidWachtwoord)
    return next(new HttpError("Kon niet inloggen geen geldige wachtwoord", 401));

  let token;
  try {
    token = jwt.sign(
      { gebruikerId: existingGebruiker.id, email: existingGebruiker.email },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
  } catch (err) {
    return next(new HttpError("inloggen is niet gelukt probeer het later nog een keer.", 500));
  }

  res
    .status(200)
    .json({ gebruikerId: existingGebruiker.id, token: token, gebruiker: existingGebruiker });
};
