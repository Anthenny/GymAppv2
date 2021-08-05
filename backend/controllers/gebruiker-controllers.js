const uuid = require("uuid").v4;

const HttpError = require("../models/http-error");

const DUMMYGEBRUIKERS = [
  {
    id: "g1",
    naam: "Anthenny",
    wachtwoord: "123",
    aantalWorkouts: "1234",
    email: "Anthenny@hotmail.com",
  },
];

exports.getGebruikers = (req, res) => {
  res.status(200).json({ gebruikers: DUMMYGEBRUIKERS });
};

exports.signup = (req, res, next) => {
  const { naam, wachtwoord, email } = req.body;

  const hasGebruiker = DUMMYGEBRUIKERS.find((g) => g.email === email);

  if (hasGebruiker) return next(new HttpError("Kon geen gebruiker maken email bestat al", 422));

  const createdGebruiker = {
    id: uuid(),
    naam,
    wachtwoord,
    email,
  };

  DUMMYGEBRUIKERS.push(createdGebruiker);

  res.status(201).json({ gebruiker: createdGebruiker });
};

exports.login = (req, res, next) => {
  const { email, wachtwoord } = req.body;

  const identifiedGebruiker = DUMMYGEBRUIKERS.find((g) => g.email === email);
  if (!identifiedGebruiker || identifiedGebruiker.wachtwoord !== wachtwoord)
    return next(new HttpError("Kon geen gebruiker vinden met deze email", 401));

  res.status(200).json({ message: "logged in" });
};
