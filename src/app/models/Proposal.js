const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProposalSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    client: { type: String },
    content: { type: String },
    totalAmount: { type: Number },
    currency: { type: String },
    validUntil: { type: Date },
    status: { type: String },
    clientEmail: { type: String },
    viewCount: { type: Number },
    sentAt: { type: Date },
    viewedAt: { type: Date },
    respondedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Proposal', ProposalSchema);