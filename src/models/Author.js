const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    birthDate: { type: Date, required: true },
    sex: { type: String, required: true },
    writingGenre: {
        type: String,
        required: true,
        enum: ['Novel','Poetry','Fantasy','Fiction','Mystery','Suspense']
    }
}, { timestamps: true });


module.exports = mongoose.model('Authors', AuthorSchema);