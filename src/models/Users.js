const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    birthDate: { type: Date, required: true },
    sex: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });


module.exports = mongoose.model('Users', UserSchema);