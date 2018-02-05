let mongoose = require('mongoose');

let QuizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    video: {
        type: String, 
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'question'
    }]
});

module.exports = mongoose.model('Quiz', QuizSchema);