const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    type: { type: String },
    reporter: { type: Schema.Types.ObjectId, ref: 'User' },
    targetId: { type: Schema.Types.ObjectId },
    reason: { type: String },
    description: { type: String },
    status: { type: String },
    resolution: { type: String },
    resolvedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);