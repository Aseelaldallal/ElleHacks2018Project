const fs = require('fs');
const util = require('util');
require('util.promisify').shim();
const Question = require('../../models/question');
const Quiz = require("../../models/quiz");
const mongoose = require('mongoose');


const readFile = util.promisify(fs.readFile);


const seedDB = () => {
    readFile('./config/db/db.json').then(file=> {
        let data = JSON.parse(file);
        // insertQuestions(data.questions);
        insertQuizes(data.quizes);
    }).catch(err=> {
        console.log(err);
    })
}

const insertQuizes = quizData => {
     Quiz.insertMany(quizData).then(() => {
        console.log('inserted quizes');
    }).catch(err => {
        console.log("Error inserting quizes: ", err);
    })
}

const insertQuestions = questionsData => {
    Question.insertMany(questionsData).then(() => {
        console.log('inserted questions');
        console.log('questions');
    }).catch(err => {
        console.log("Error inserting questions: ", err);
    })
}

module.exports = seedDB;