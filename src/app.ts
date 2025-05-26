import express from "express";
import accountRoutes from "./routes/account.routes";

const app = express();

app.use(express.json());
app.use("/api", accountRoutes);

export default app;
