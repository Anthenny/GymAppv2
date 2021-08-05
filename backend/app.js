const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logboekRoutes = require("./routes/logboek-routes");
const gebruikerRoutes = require("./routes/gebruikers-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/logboek", logboekRoutes); // 1e argument zet standaard /api/logboek/ voor elke route in logboekRoutes
app.use("/api/gebruikers", gebruikerRoutes);

app.use("*", (req, res, next) => {
  return next(new HttpError("Could not find this route", 404));
});

// Deze middleware wordt geroepen als 1 van de bovenstaande routes een error geeft omdat het 4 argumenten heeft.
app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  res.status(error.code || 500).json({ message: error.message || "An unknown error occured" });
});
mongoose
  .connect(
    "mongodb+srv://Anthenny:Anthennyanna1997@cluster0.atr0x.mongodb.net/gymApp?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
