import mongoose from "mongoose";
const { commonAttributes } = require("@/app/models/car/commonattributes");

//Define the EngineCar schema

const engineCareScheam = new mongoose.Schema({
  ...commonAttributes,
  engine: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
});

const EngineCar = mongoose.model("EngineCar", engineCareScheam);
module.exports = EngineCar;
