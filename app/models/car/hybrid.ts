import mongoose from "mongoose";
const { commonAttributes } = require("@/app/models/car/commonattributes");

//Define the Hybrid Car schema

const hybridCarSchema = new mongoose.Schema({
  ...commonAttributes,
  engine: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  battry_capacity: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
});

const HybridCar = mongoose.model("HybridCar", hybridCarSchema);
module.exports = HybridCar;
