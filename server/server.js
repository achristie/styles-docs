const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const router = require('./router.js');

const app = express();

//app.use(session({ secret: 'abccc', resave: false, saveUnitialized: false }));

// configure express
//app.use('/', [  express.static(path.resolve(__dirname + '/../build')) ]);
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'test_secret' }));
router(app);

// serialize and deserialize the user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});


// start server
app.listen(4000, () => console.log('Listening on port 4000'));

