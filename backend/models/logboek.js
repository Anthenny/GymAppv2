const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logboekSchema = new Schema({
  titel: { type: String, required: true },
  beschrijving: { type: String, required: true },
  maker: { type: mongoose.Types.ObjectId, required: true, ref: "Gebruiker" },
  categorie: { type: String, required: true },
  datum: { type: String, required: true },
});

module.exports = mongoose.model("Log", logboekSchema);
