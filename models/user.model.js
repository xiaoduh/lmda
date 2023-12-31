import { models } from "mongoose";
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    professional_role: {
      type: String,
      required: true,
    },
    business_registration_number: {
      type: String,
      required: true,
      unique: true,
    },
    open_position: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into db

// userSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const UserModel = models.user || mongoose.model("user", userSchema);

module.exports = UserModel;
