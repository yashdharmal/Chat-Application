const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, { timestamps: true, versionKey: false })

const User = mongoose.model('user', userSchema)

module.exports = { User }