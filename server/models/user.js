let mongoose = require('mongoose');



let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    progress: [{
        category: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'category'
        },
        percentComplete: Number
    }]
});

module.exports = mongoose.model('User', UserSchema);