const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    bio: { type: String },
    location: { type: String },
    phone: { type: String },
    website: { type: String },
    isPublic: { type: Boolean },
    completionPercentage: { type: Number },
    resumeUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);