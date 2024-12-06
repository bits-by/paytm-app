const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    title: {
        require: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    fName: String,
    lName: String,
    pNumber: Number
})

module.export = mongoose.model('User', UserSchema)