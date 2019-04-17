const passport = require('passport');
const googleAuthStrategy = require('passport-google-oauth20');
const gitHubStrategy = require('passport-github').Strategy;
const keys = require('./keys')
const User = require('../database-models/users');

passport.use(new googleAuthStrategy({
    // options for google login
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback function fired');
    console.log(profile);
})
)

passport.use(new gitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "https://evening-fjord-57340.herokuapp.com/auth/github/callback"
},

    function (accesstoken, refreshtoken, profile, cb) {
        user.findorcreate({ githubid: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));
