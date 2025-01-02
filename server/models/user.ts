import { model, Schema } from "mongoose";

import {
  containsLowercase,
  containsNumber,
  containsSpecialCharacter,
  containsUppercase,
  isEmail,
} from "../utils/validators";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "Password must be at least 8 characters long"],
      validate: [
        {
          validator: containsUppercase,
          message: "Password must contain at least one uppercase letter",
        },
        {
          validator: containsLowercase,
          message: "Password must contain at least one lowercase letter",
        },
        {
          validator: containsNumber,
          message: "Password must contain at least one number",
        },
        {
          validator: containsSpecialCharacter,
          message: "Password must contain at least one special character",
        },
      ],
    },
  },
  { timestamps: true },
);

const user = model("user", userSchema);

export default user;
