import express from "express";
import { createAuthor, getAllAuthors } from "../controllers/authorsC.js";

const router = express.Router();


router.post("/", createAuthor);


router.get("/", getAllAuthors);

export default router;
