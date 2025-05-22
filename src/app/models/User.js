const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, default: 'Người dùng mới' },
    dob: { type: Date },
    role: { type: String, default: 'user' },
    avatar: { type: String, default: '/img/dafaultAvatar.jpg' },
    address: { type: String, default: '' },
    phone: { type: String },
    bankNumber:{type: String},
    email: { type: String, required: true },
    status: { type: String, default: 'active' },
    gender: {type: Boolean, default: true},
    ｓkill: {type: String},
    gender: {type: Boolean, default: true},
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);