import { Schema, Model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 5,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

export default new Model("users", userSchema);
