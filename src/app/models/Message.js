const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversation' },
    content: { type: String },
    isRead: { type: Boolean },
    readAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);