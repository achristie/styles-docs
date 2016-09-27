const passport = require('passport');

module.exports = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send('index');
    });
    app.get('/error', (req, res) => {
        res.send('error');
    });
    app.get('auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }),
    (req, res) => {

    });
    app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/error'}),
    (req, res) => {
        res.redirect('/');
    });
}

function requireAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}