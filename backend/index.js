// const express = require('express'); OLD WAY
import express from 'express'; // NEW WAY
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import  userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js'

dotenv.config({}); // Load environment variables from .env file 

// ALWAYS ON TOP AFTER ALL IMPORTS
const app = express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"i am comming from backend",
//         success:true 
//     })
// })

// Middleware setup
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(cookieParser()); // Middleware to parse cookies
const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000;

// API'S
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)

// IN POSTMAN 👇🏻
// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"

app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB
    console.log(`Server is running at port ${PORT}`);
})