import { Schema, model } from "mongoose";

const UsersAdmin = new Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 12,
  },
  isLogin: Boolean,
});

export const User = model("UserAdmin", UsersAdmin);
