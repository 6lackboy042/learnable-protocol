import { Document } from "mongoose";
import { ICard } from "./card.interface";

export interface IAccount extends Document {
  firstName: string;
  surname: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  accountNumber: string;
  card: ICard;
  decryptFields?(): {
    phoneNumber: string;
    dateOfBirth: string;
  };
}
