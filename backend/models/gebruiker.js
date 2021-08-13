const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gebruikerSchema = new Schema({
  naam: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  laatstGezien: { type: String, default: "9-8-2021", required: true },
  aantalWorkouts: { type: Number, default: 0, required: true },
  wachtwoord: { type: String, required: true, minLength: 3 },
  logs: [{ type: mongoose.Types.ObjectId, required: true, ref: "Log" }], // Omdat je meer dan 1 waarde kan hebben maak je er een array van
});

// gebruikerSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Gebruiker", gebruikerSchema);
