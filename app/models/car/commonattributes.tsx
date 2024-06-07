const mongoose = require("mongoose");
const { Schema } = mongoose;

//define the common attributes
const commonAttributes = {
  brand: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    required: true,
  },
  body_type: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  drive_type: {
    type: String,
    required: true,
  },
  top_speed: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  to_rent: {
    type: Boolean,
    required: true,
  },
  commission: {
    type: Number,
    required: true,
  },
};

module.exports = commonAttributes;
