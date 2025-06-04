const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Jobseeker', 'Recruiter', 'Admin'], default: 'Jobseeker' },
    profilePicture: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
    subscriptionTier: { type: String },
    subscriptionStartDate: { type: Date },
    subscriptionEndDate: { type: Date },
    subscriptionIsActive: { type: Boolean },
    subscriptionPaymentMethod: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);