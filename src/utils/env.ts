import dotenv from "dotenv";
dotenv.config();
export const DB_URI = process.env.DB_URI;
export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
