const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    passwordResetToken: String,
    passwordResetExpires: Date,
    name: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
});

/**
 * Methods
 */
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.getAuthToken = function () {
    const payload = {
        userId: this._id,
        isAdmin: this.isAdmin,
    };

    const options = {
        expiresIn: config.auth.jwtTokenExpireIn,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);

    return token;
};

userSchema.methods.getPublicData = function () {
    return {
        id: this._id,
        email: this.email,
        name: this.name,
        isAdmin: this.isAdmin,
    };
};

/**
 * Static methods
 */
userSchema.statics.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

userSchema.statics.generatePasswordResetToken = () => ({
    passwordResetToken: crypto.randomBytes(16).toString('hex'),
    passwordResetExpires: Date.now() + config.auth.passwordResetExpireInMs,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
