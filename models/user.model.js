const { timeStamp } = require("console");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timeStamp: true,
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;