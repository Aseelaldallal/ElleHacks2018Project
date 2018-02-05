// ===============================================
// SETUP
// ===============================================

var express  = require('express'),
    Category = require('../models/category'),
    router   = express.Router();

// ===============================================
// Index: Display All Categories
// ===============================================


router.get('/', function (req, res) {
  Category.find({}).then(categories => {
    res.send(categories);
  }).catch(err => {
    res.status(400).send(err);
  })
});

// ===============================================
// Create: Add Category
// ===============================================

router.post('/', (req, res) => {
  const category = new Category(req.body);
  category.save().then(newCategory => {
    res.send(newCategory); 
  }).catch(err => {
    res.status(400).send(err);
  })
});

// ===============================================
// Update: Update Category
// ===============================================


// What happens when you update? You add quizes. Not here.
// router.patch('/category/:id', (req, res) => {
    
// });

// ===============================================
// Show: Show Category
// ===============================================

// Display a list of quizes in category
router.get('/:category_id', (req,res) => {
    
});


// ===============================================
// Export
// ===============================================

module.exports = router;