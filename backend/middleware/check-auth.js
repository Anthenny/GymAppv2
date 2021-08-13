const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    // Als er wel iets in de header zit maar het is geen token.
    if (!token) throw new Error("U moet inloggen om dit te kunnen doen !");
    const decodedToken = jwt.verify(token, process.env.JWT_KEY); // Checkt of het klopt en je krijgt de payload als antwoord.
    req.gebruikerData = { gebruikerId: decodedToken.gebruikerId };
    next();
  } catch (err) {
    // Als er geen token is kan die hem niet splitten dan krijg je een error.
    return next(new HttpError("U moet inloggen om dit te kunnen doen !", 401));
  }
};
