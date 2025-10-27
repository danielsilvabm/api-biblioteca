import express from "express";
import { createLoan } from "../controllers/loansC.js";

const router = express.Router();


router.post("/", createLoan);

export default router;
