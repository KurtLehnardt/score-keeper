const router = require('express').Router();
const passport = require('passport');
const path = require('path');

router.get('/login', (req, res) => {
    //handle with passport
    res.render('login');
});

router.get('/logout', (req, res) => {
    // handle with passport
    res.render('logout');
});

// google auth
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//router.get('/gamelist', (req, res) => {
//    res.sendfile('gamelist.html', { root: './public' });
//})

router.get('/simon', (req, res) => {
    res.sendFile('simon.html', { root: './public' });
})

router.get('/buttonClicker', (req, res) => {
    res.sendFile('buttonClicker.html', { root: './public' });
})

router.get('/drumMachine', (req, res) => {
    res.sendFile('drumMachine.html', { root: './public' });
})

router.get('/happyPath', (req, res) => {
    res.sendFile('happyPath.html', { root: './public' });
})

// google auth callback route
router.get('/google/redirect', (req, res) => {
    //res.send('this is the redir uri')
    //res.sendFile(path.join(__dirname + '/gameList.html'));
    res.sendFile('gameList.html', { root: './public' });
});

// github auth
router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

router.get('/github/redirect', (req, res) => {
    // Successful authentication
    res.sendFile('gameList.html', { root: './public' });
});

// handle bad URI
router.get('*', function (req, res) {
    res.render('404');
});

module.exports = router;
