let mongoose = require('mongoose');



let CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quizes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }]
});

module.exports = mongoose.model('Category', CategorySchema);