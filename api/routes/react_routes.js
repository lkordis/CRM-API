module.exports = function (app) {
    app.route('/login')
        .get((req, res) => {
            res.render('login', { req: JSON.parse(req.query.data) });
        })

    app.route('/register')
        .get((req, res) => {
            res.render('register', { req: JSON.parse(req.query.data) })
        })
}