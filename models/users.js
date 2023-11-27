const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
    },
    umur: {
        type: String,
        required: [true, 'Silahkan isikan umur anda'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('users', UserSchema);
