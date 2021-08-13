const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logboekRoutes = require("./routes/logboek-routes");
const gebruikerRoutes = require("./routes/gebruikers-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use((req, res, next) => {
  // Je hebt 3 headers nodig 1e is hoe het heet 2e argument is vanwaar ze je api mogen gebruiken. ipv * zet je dan localhost:3000
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE"); // Welke methods sta je toe.

  next(); // Laat het doorgaan naar de volgende middleware.
});

app.use("/api/logboek", logboekRoutes); // 1e argument zet standaard /api/logboek/ voor elke route in logboekRoutes
app.use("/api/gebruikers", gebruikerRoutes);

app.use("*", (req, res, next) => {
  return next(new HttpError("Could not find this route", 404));
});

// Deze middleware wordt geroepen als 1 van de bovenstaande routes een error geeft omdat het 4 argumenten heeft.
app.use((error, req, res, next) => {
  // Als er een error is bv bij signup can je de img verwijderen in uploads/images door gebruik te maken van node core module fs.
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) return next(error);

  res.status(error.code || 500).json({ message: error.message || "An unknown error occured" });
});
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.atr0x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
