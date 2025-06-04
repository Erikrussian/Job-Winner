const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CVTemplateSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    category: { type: String },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    isPremium: { type: Boolean },
    price: { type: Number },
    isActive: { type: Boolean },
    usageCount: { type: Number },
    ratingAverage: { type: Number },
    ratingCount: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('CVTemplate', CVTemplateSchema);
