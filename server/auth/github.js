const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;


const callbackURL = "http://localhost:4000/auth/github/callback";

module.exports = passport.use(new GitHubStrategy({
    clientID,
    clientSecret,
    callbackURL
},
    (accessToken, refreshToken, profile, done) => done(null, profile)
));

