let mongoose = require('mongoose');

let StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }]
});

module.exports = mongoose.model('Store', StoreSchema);