import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI!);
    console.log("🔌 Connected to MongoDB");
  } catch (error) {
    console.error("❌ DB Connection Error", error);
    process.exit(1);
  }
};
