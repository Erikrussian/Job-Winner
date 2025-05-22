const loginRouter = require('./login')
const registerRouter = require('./register')
const logoutRouter = require('./logout')
function route(app) {
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
    app.use('/logout', logoutRouter)
}
module.exports = route