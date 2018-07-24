const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        default: 'User_role'
    },
    status: {
        type: Boolean
    },
    google: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', UserSchema);