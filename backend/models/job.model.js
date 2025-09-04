import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming a Recruiter user posts the job
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Internship', 'Contract', 'Remote'],
        required: true
    },
    salary: {
        type: Number, // or Number if you prefer, but salary ranges are often strings
        required: false
    },
    requirements: [{
        type: String
    }],
    experienceLevel: {
        type: String
    },
    position: {
        type: Number,
        default: 1
    },
    deadline: {
        type: Date
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
}, { timestamps: true });

export const Job = mongoose.model('Job', jobSchema);