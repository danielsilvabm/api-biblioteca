import express from "express";
import { createBook, getAllBooks } from "../controllers/booksC.js";

const router = express.Router();


router.post("/", createBook);


router.get("/", getAllBooks);

export default router;
