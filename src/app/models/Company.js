const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    logo: { type: String },
    website: { type: String },
    description: { type: String },
    industry: { type: String },
    size: { type: String },
    founded: { type: Number },
    headquarters: { type: String },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);