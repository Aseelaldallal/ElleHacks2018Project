

// =============================================================================
// SETUP
// =============================================================================

const express    = require('express'),
      mongoose   = require('./config/db/mongoose'),
      bodyParser = require('body-parser'),
      app        = express();
    

// =============================================================================
// MIDDLEWARE
// =============================================================================

// Parse client request body - turn it into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// =============================================================================
// ROUTE SETUP
// =============================================================================

// Get Routes
const categoryRoutes = require('./routes/category');
const quizRoutes = require('./routes/quiz');

// Register Routes
app.use('/category', categoryRoutes); // All routes inside itemRoutes are now prefixed with /items
app.use('/category/:category_id/quiz/', quizRoutes);



// =============================================================================
// LISTEN
// =============================================================================

    

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening on port ", process.env.PORT);
});