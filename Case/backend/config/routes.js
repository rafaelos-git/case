module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.service.getInfo)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.service.getInfoById)
        .delete(app.api.service.remove)
        .put(app.api.service.update)

    app.route('/users/:id/toggle')
        .all(app.config.passport.authenticate())
        .put(app.api.service.toggleStatus)
}