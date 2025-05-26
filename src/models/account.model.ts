import mongoose from "mongoose";
import { Card } from "./card.model";

const AccountSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  accountNumber: { type: String, required: true, unique: true },
  card: { type: Object, ref: Card },
});

export const Account = mongoose.model("Account", AccountSchema);
