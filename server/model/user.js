const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let validRoles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} is not valid'
}

let UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        unique: true,
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
        default: 'User_role',
        enum: validRoles
    },
    status: {
        type: Boolean,
        required: false,
        default: true
    },
    google: {
        type: Boolean,
        required: false,
        default: false
    }
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

module.exports = mongoose.model('User', UserSchema);