// ===============================================
// SETUP
// ===============================================

var express  = require('express'),
    Quiz     = require('../models/quiz'),
    Category = require('../models/category'),
    router   = express.Router();

// ===============================================
// Index: Display All Quizes in a Category
// ===============================================

router.get('/', function (req, res) {
    // req.params.category_id 
    // Look for the category, pull out the quizes
    // populate
});

// ===============================================
// Create: Add Quiz
// ===============================================

router.post('/', (req, res) => {
  // Create Quiz
  // Update Category
});


// ===============================================
// Show: Show Specific Quiz
// ===============================================

router.get('/:quiz_id', (req,res) => {
    // Get quiz with id quiz_id
})


// ===============================================
// Update: Update Quiz
// ===============================================


// ===============================================
// Delete: Delete Quiz
// ===============================================



// ===============================================
// Export
// ===============================================

module.exports = router;