const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api',require('./routes/pets.route'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

