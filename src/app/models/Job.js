const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    recruiter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
    type: { type: String },
    category: { type: String },
    location: { type: String },
    isRemote: { type: Boolean },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    salaryCurrency: { type: String },
    salaryNegotiable: { type: Boolean },
    salaryPeriod: { type: String },
    experienceLevel: { type: String },
    educationLevel: { type: String },
    applicationDeadline: { type: Date },
    applicationUrl: { type: String },
    contactEmail: { type: String },
    status: { type: String },
    isFeatured: { type: Boolean },
    views: { type: Number },
    applications: { type: Number },
    publishedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);