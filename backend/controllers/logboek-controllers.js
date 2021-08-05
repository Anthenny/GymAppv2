const uuid = require("uuid").v4;
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

let DUMMYWORKOUTLOGS = [
  {
    id: "l1",
    gebruiker: "Anthenny",
    gebruikerId: "g1",
    titel: "Borst",
    beschrijving:
      "Bench Press 20 KG warming up 40 KG warming up70 KG werk set 10x70KG werk set 10x Incline Bench 60 KG werk set 10x 60 KG werk set 8x60 KG werk set 6x",
    datum: "1-8-2021",
  },
  {
    id: "l1",
    gebruiker: "Anthenny",
    gebruikerId: "g1",
    titel: "Benen",
    beschrijving:
      "Bench Press 20 KG warming up 40 KG warming up70 KG werk set 10x70KG werk set 10x Incline Bench 60 KG werk set 10x 60 KG werk set 8x60 KG werk set 6x",
    datum: "1-8-2021",
  },
  {
    id: "l1",
    gebruiker: "Olaf",
    gebruikerId: "g2",
    titel: "Rug",
    beschrijving:
      "Bench Press 20 KG warming up 40 KG warming up70 KG werk set 10x70KG werk set 10x Incline Bench 60 KG werk set 10x 60 KG werk set 8x60 KG werk set 6x",
    datum: "1-8-2021",
  },
];

exports.getLogById = (req, res, next) => {
  // Deze functie pakt een specifieke log die matchd met het ingevulde id
  const logId = req.params.logId;
  const log = DUMMYWORKOUTLOGS.find((workout) => workout.id === logId);

  if (!log) {
    return next(new HttpError("Could not find a log for the requested log", 404));
  }
  res.json({ log });
};

exports.getLogsByUserId = (req, res, next) => {
  // Deze functie pakt alle logs die matched met de ingevulde gebruiker id.
  const gebruikerId = req.params.gebruikerId;

  const gebruikerLogs = DUMMYWORKOUTLOGS.filter((g) => g.gebruikerId === gebruikerId); // find geeft 1e terug die matched filter geeft een hele nieuwe array terug met alles dat matched

  if (!gebruikerLogs || gebruikerLogs.length === 0) {
    return next(new HttpError("Could not find a log for the requested log", 404));
  }
  res.json({ gebruikerLogs });
};

exports.createWorkoutLog = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError("invalid inputs passed, please check your data", 402));
  }

  const { titel, beschrijving, gebruikerId, gebruiker, datum } = req.body;
  const createdWorkoutLog = {
    id: uuid(),
    titel,
    beschrijving,
    gebruikerId,
    gebruiker,
    datum,
  };

  console.log(DUMMYWORKOUTLOGS);
  DUMMYWORKOUTLOGS.push(createdWorkoutLog);
  console.log(DUMMYWORKOUTLOGS);

  res.status(201).json({ workoutLog: createdWorkoutLog });
};

exports.updateLog = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError("invalid inputs passed, please check your data", 402));
  }

  const { titel, beschrijving } = req.body;
  const logId = req.params.logId;

  const updatedLog = { ...DUMMYWORKOUTLOGS.find((log) => log.id === logId) }; // maak een copy van dit object
  const logIndex = DUMMYWORKOUTLOGS.findIndex((log) => log.id === logId);
  updatedLog.titel = titel;
  updatedLog.beschrijving = beschrijving;

  DUMMYWORKOUTLOGS[logIndex] = updatedLog;

  res.status(200).json({ log: updatedLog });
};

exports.deleteLog = (req, res) => {
  const logId = req.params.logId;
  DUMMYWORKOUTLOGS = DUMMYWORKOUTLOGS.filter((l) => l.id !== logId); // als het matched houden we het als het false is droppen we het.
  res.status(200).json({ message: "deleted" });
};
