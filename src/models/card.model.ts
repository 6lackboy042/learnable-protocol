import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  CVV: { type: String, required: true },
  expiryDate: { type: String, required: true },
});

export const Card = mongoose.model("Card", CardSchema);
