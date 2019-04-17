const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// view engine
app.set('view engine', 'ejs');

//connect to mongoose
mongoose.connect(keys.mongodb.dbURI, () => {  
    console.log('connected to mongoDB')
});

app.use('/auth', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
})

// buttonClick game route
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});


app.get('/buttonClicker', function (req, res) {
    res.sendFile('/buttonClicker.html', { root: '/views' });
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Listening on localhost:3000 with changes');
}) 
