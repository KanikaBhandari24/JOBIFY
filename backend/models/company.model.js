import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    location: {
        type: String
    },
    website: {
        type: String
    },
    description: {
        type: String
    },
    logo: {
        type: String, // URL or path to the company logo
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    }
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);