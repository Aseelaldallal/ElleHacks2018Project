let mongoose = require('mongoose');

let QuizScore = new mongoose.Schema({
   quiz: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'quiz'
   },
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'user'
   }, 
   score: {
       type: Number,
       requied: true
   }
});

module.exports = mongoose.model('QuizScore', QuizScore);