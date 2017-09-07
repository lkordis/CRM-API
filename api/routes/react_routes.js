module.exports = function (app) {
    app.route('/login')
        .get((req, res) => {
            res.render('login', { req: JSON.parse(req.query.data) });
        })
}