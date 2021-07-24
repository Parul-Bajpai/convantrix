const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: String,
      maxlength: 15,
    },
    company: {
      type: String,
    },
    requirement: {
      type: String,
    },
  },
  { timestamps: true }
);

const Quotes = mongoose.model("Quotes", quoteSchema);

module.exports = { Quotes };
