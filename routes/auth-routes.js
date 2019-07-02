const router = require('express').Router()
const passport = require('passport')
const path = require('path')

// see about using chained route handlers for scoreList get, post and put.
// e.g. app.route('/scoreList')
//   .get(function (req, res) {
//     res.send('See High Scores')
//   })
//   .post(function (req, res) {
//     res.send('Add a High Score')
//   })
//   .put(function (req, res) {
//     res.send('Update the High Scores List')
//   })

router.get('/login', (req, res) => {
    //handle with passport
    res.render('login')
})

router.get('/logout', (req, res) => {
    // handle with passport
    res.render('logout')
})

// google auth
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

//router.get('/gamelist', (req, res) => {
//    res.sendfile('gamelist.html', { root: './public' })
//})

router.get('/simon', (req, res) => {
    res.sendFile('simon.html', { root: './public' })
})
router.get('/simon.js', (req, res) => {
    res.sendFile('simon.js', { root: './public' })
})
router.get('/simon.css', (req, res) => {
    res.sendFile('simon.css', { root: './public' })
})


router.get('/buttonClicker', (req, res) => {
    res.sendFile('buttonClicker.html', { root: './public' })
})
router.get('/buttonClicker.js', (req, res) => {
  res.sendFile('buttonClicker.js', { root: './public' })
})
router.get('/buttonClicker.css', (req, res) => {
  res.sendFile('buttonClicker.css', { root: './public' })
})


router.get('/drumMachine', (req, res) => {
    res.sendFile('drumMachine.html', { root: './public' })
})

// chained routes to try it out
router.get('/happyPath', (req, res) => {
    res.sendFile('happyPath.html', { root: './public' })
})
router.get('/happyPath.js', (req, res) => {
    res.sendFile('happyPath.js', { root: './public' })
})
router.get('/happyPathNoTextType.js', (req, res) => {
  res.sendFile('happyPathNoTextType.js', { root: './public' })
})
router.get('/happyPathWithoutDotSlash.js', (req, res) => {
    res.sendFile('happyPathWithoutDotSlash.js', { root: './public' })
})
router.get('/happyPathWithoutDotSlashAsync.js', (req, res) => {
    res.sendFile('happyPathWithoutDotSlashAsync.js', { root: './public' })
    return next()
})


// google auth callback route
router.get('/google/redirect', (req, res) => {
    //res.send('this is the redir uri')
    //res.sendFile(path.join(__dirname + '/gameList.html'))
    res.sendFile('gameList.html', { root: './public' })
})
router.get('/gameList.css', (req, res) => {
    res.sendFile('gameList.css', { root: './public' })
})


// github auth
router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}))

router.get('/github/redirect', (req, res) => {
    // Successful authentication
    res.sendFile('gameList.html', { root: './public' })
})

router.get('/users/:userId/games/:gameId',(req, res) => {
  console.dir(req.params.userId, req.params.gameId)
  res.send(req.params)
})

router.post('/', (req, res) => {
  res.send('POST request to home page')
})


// handle bad URI
// router.get('*', (req, res, next) => {
//     res.render('404')
//     next()
// })

module.exports = router
