const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
    isActive: { type: Boolean },
    lastMessageAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Conversation', ConversationSchema);

