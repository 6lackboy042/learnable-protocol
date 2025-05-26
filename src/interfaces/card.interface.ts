import { Document } from "mongoose";

export interface ICard extends Document {
  cardNumber: string;
  CVV: string;
  expiryDate: string;
  userId?: object;
  decryptFields?(): {
    cardNumber: string;
    CVV: string;
    expiryDate: string;
  };
}

export interface ICardGenerator {
  CVV: string;
  expiryDate: string;
  cardNumber: string;
}
