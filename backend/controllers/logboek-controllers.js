const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Logboek = require("../models/logboek");
const Gebruiker = require("../models/gebruiker");
const mongoose = require("mongoose");

exports.getLogById = async (req, res, next) => {
  // Deze functie pakt een specifieke log die matchd met het ingevulde id
  const logId = req.params.logId;
  console.log(logId);
  let log;
  try {
    log = await Logboek.findById(logId);
  } catch (err) {
    const error = new HttpError("Oops, Er is iets fout gegaan probeer het opnieuw.", 500);
    return next(error);
  }
  if (!log) {
    return next(new HttpError("Kon de opgevraagde log niet vinden.", 404));
  }
  res.json({ log: log });
};

exports.getLogsByUserId = async (req, res, next) => {
  // Deze functie pakt alle logs die matched met de ingevulde gebruiker id.
  const gebruikerId = req.params.gebruikerId;

  let gebruikerMetLogs;

  try {
    gebruikerMetLogs = await Gebruiker.findById(gebruikerId).populate("logs"); // Zoek voor een gebruiker id en populate de velden binnen in logs.(zodat het meer is dan alleen een id nr.)
  } catch (err) {
    console.log(err);
    return next(new HttpError("Er ging iets fout probeer het opnieuw", 500));
  }

  if (!gebruikerMetLogs || gebruikerMetLogs.logs.length === 0)
    return next(new HttpError("De gebruiker heeft nog geen logs", 404));

  const gebruikerWorkoutLogs = gebruikerMetLogs.logs.filter((log) => log.categorie === "workout");
  const gebruikerGewichtLogs = gebruikerMetLogs.logs.filter((log) => log.categorie === "gewicht");

  res.json({
    gebruikerWorkoutLogs: gebruikerWorkoutLogs,
    gebruikerGewichtLogs: gebruikerGewichtLogs,
    gebruikerLogs: gebruikerMetLogs,
  });
};

exports.createLog = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError("Vul aub geldige data in", 402));
  }

  const { titel, beschrijving, categorie, maker, datum } = req.body;

  if (!titel || !beschrijving || !maker) return next(new HttpError("Vul aub geldige data in"));

  const createdLog = new Logboek({
    titel,
    beschrijving,
    maker,
    categorie,
    datum,
  });
  let gebruiker;

  try {
    gebruiker = await Gebruiker.findById(maker);
  } catch (err) {
    return next(new HttpError("creating log failed please try again"));
  }

  if (!gebruiker) return next(new HttpError("Kon geen gebruiker vinden met ingevulde id", 404));

  try {
    const sess = await mongoose.startSession(); // maak een sessie aan
    sess.startTransaction(); // start de sessie
    await createdLog.save({ session: sess }); // sla het op in de sessie
    gebruiker.logs.push(createdLog); // Speciale mongoose method geen array method. die het achter de schermen het log id toevoegd aan gebruiker document
    await gebruiker.save({ session: sess }); // sla het op in de sessie
    await sess.commitTransaction(); // Als alles is gelukt wordt het nu pas opgeslagen in de database. Als 1 ding fout gaat word er niks doorgevoerd in de database.
    //  Belangrijk de sessie maakt niet automatisch een collectie aan als deze nog niet bestaat.
  } catch (err) {
    const error = new HttpError("Kon uw log niet aanmaken, probeer het opniewu");
    return next(error);
  }

  res.status(201).json({ workoutLog: createdLog });
};

exports.updateLog = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError("Vul aub geldige data in", 402));
  }

  const { titel, beschrijving } = req.body;
  const logId = req.params.logId;

  let log;
  try {
    log = await Logboek.findById(logId);
  } catch (err) {
    const error = new HttpError("Er is iets fout gegaan, probeer het opnieuw", 500);
    return next(error);
  }

  if (log.maker.toString() !== req.gebruikerData.gebruikerId) {
    return next(new HttpError("U kunt dit niet aanpassen omdat u niet de eigenaar bent.", 401));
  }

  log.titel = titel;
  log.beschrijving = beschrijving;

  try {
    log.save();
  } catch (err) {
    const error = new HttpError("Er is iets fout gegaan, probeer het opnieuw", 500);
    return next(error);
  }

  res.status(200).json({ log: log });
};

exports.deleteLog = async (req, res) => {
  const logId = req.params.logId;

  let log;
  try {
    log = await Logboek.findById(logId).populate("maker");
  } catch (err) {
    console.log(err);
    return next(new HttpError("Er ging iets fout probeer het opnieuw", 500));
  }

  if (!log) return next(new HttpError("Kan de log die u probeert te verwijderen niet vinden", 404));

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await log.remove({ session: sess }); // verwijder de log van de loegboek collectie
    log.maker.logs.pull(log); // Haalt id weg binnen in de gebruiker collecite
    await log.maker.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Kan de plek niet verwijderen", 500));
  }

  res.status(200).json({ message: "deleted" });
};
