const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String },
    title: { type: String },
    message: { type: String },
    isRead: { type: Boolean },
    link: { type: String },
    readAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);