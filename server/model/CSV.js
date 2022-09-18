const mongoose = require("mongoose");

const CSVSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CSVModel", CSVSchema);
