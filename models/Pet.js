const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pinCode: { type: String, required: true },
  petType: { type: String, required: true },
  petNature: { type: String, required: true },
  petName: { type: String, required: true },
  gender: { type: String, required: true },
  price: { type: Number, required: true },
  breedType: { type: String },
  primaryBreed: { type: String },
  checks: {
    kciCertified: { type: String },
    microChip: { type: String },
    vaccinated: { type: String },
    healthCheckUp: { type: String },
  },
  size: { type: String },
  weight: { type: Number },
  weightUnit: { type: String },
  behavior: { type: String },
  dob: { type: Date },
  goodWithKids: { type: String,  default: "Don't Know" }, 
  parvoInfected: { type: String,  default: "Don't Know" }, 
  activityLevel: { type: String,  default: "Don't Know" }, 
  pottyTrained: { type: String,  default: "Don't Know" }, 
});

module.exports = mongoose.model('Pet', PetSchema);
