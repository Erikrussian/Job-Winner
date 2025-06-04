const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number },
    currency: { type: String },
    type: { type: String },
    status: { type: String },
    paymentMethod: { type: String },
    transactionId: { type: String },
    invoiceUrl: { type: String },
    completedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);