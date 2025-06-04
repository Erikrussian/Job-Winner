const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    plan: { type: String },
    status: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    billingPeriod: { type: String },
    price: { type: Number },
    currency: { type: String },
    autoRenew: { type: Boolean },
    paymentMethod: { type: String },
    cancelReason: { type: String },
    lastBillingDate: { type: Date },
    nextBillingDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
