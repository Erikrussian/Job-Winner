const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CVSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    template: { type: Schema.Types.ObjectId, ref: 'CVTemplate' },
    isPublic: { type: Boolean },
    views: { type: Number },
    downloads: { type: Number },
    lastGeneratedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('CV', CVSchema);