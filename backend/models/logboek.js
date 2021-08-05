const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const logboekSchema = new Schema({
  titel: { type: String, required: true },
  beschrijving: { type: String, required: true },
  gebruiker: { type: String, required: true },
  datum: { default: Date.now(), required: true },
});

module.exports = mongoose.model("Log", logboekSchema);
