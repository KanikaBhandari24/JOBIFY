import express from "express";
import {
    registerCompany,
    getCompany,
    getCompanyById,
    updateCompany
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";  

const router = express.Router();

// Register a new company
router.route("/register").post(isAuthenticated, registerCompany);

// Get all companies created by the logged-in user
router.route("/get").get(isAuthenticated, getCompany);

// Get a company by its ID
router.route("/get/:id").get(isAuthenticated, getCompanyById);

// Update a company by its ID - put is used
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;