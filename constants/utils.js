const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const saltRounds = 10;
async function hashPassword(password) {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw new Error('Password hashing failed');
    }
}

async function isPasswordCorrect(password, hashPassword,) {
    try {
        return bcrypt.compare(password, hashPassword)
    } catch (error) {
        throw new Error('Password compare failed');
    }
}

function createdToken(data, expireTime = '24h') {
    try {
        return jwt.sign(data, process.env.SECRET, { expiresIn: expireTime });
    } catch (error) {
        throw new Error('Token creation failed');
    }
}


module.exports = { hashPassword, isPasswordCorrect, createdToken }