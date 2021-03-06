exports.checkLoggedUser = (req, res, next) => {
  req.user ? (req.app.locals.loggedUser = true) : (req.app.locals.loggedUser = false)
  next()
}

exports.isLoggedIn = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))

// exports.checkRole = (role) => {
//   return function(req, res, next) {
//     if (req.isAuthenticated() && req.user.role === role) return isAdmin = true
//   }
// }
