import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authorsRoutes from "./routes/authors.js";
import usersRoutes from "./routes/users.js";
import booksRoutes from "./routes/books.js";
import loansRoutes from "./routes/loans.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar MongoDB:", err));


app.use("/authors", authorsRoutes);
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/loans", loansRoutes);


app.get("/", (req, res) => {
  res.json({ ok: true, message: " API Biblioteca rodando!" });
});

export default app;
