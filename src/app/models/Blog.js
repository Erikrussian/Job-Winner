const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String },
    excerpt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    featuredImage: { type: String },
    status: { type: String },
    publishedAt: { type: Date },
    views: { type: Number },
    likes: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);