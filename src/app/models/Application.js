const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    applicant: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    resume: { type: String },
    coverLetter: { type: String },
    status: { type: String },
    isWithdrawn: { type: Boolean },
    withdrawReason: { type: String },
    lastStatusChangeAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
