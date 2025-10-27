const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    synopsis: { type: String, required: true },
    year: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Authors', required: true },
    isAvailable: { type: Boolean, default: true },
    expectedReturnDate: { type: Date, default: null }
}, { timestamps: true });


module.exports = mongoose.model('Books', BookSchema);