import mongoose from "mongoose";
const { commonAttributes } = require("@/app/models/car/commonattributes");

//Define the Electric Car schema

const electricCareScheam = new mongoose.Schema({
  ...commonAttributes,
  battry_capacity: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
});

const ElectricCar = mongoose.model("ElectricCar", electricCareScheam);
module.exports = ElectricCar;
