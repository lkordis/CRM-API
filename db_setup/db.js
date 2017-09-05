var mongoose = require('mongoose'),
    Service = mongoose.model('Services');

exports.fill = () => {
    require('./services.json').data.forEach(element => {
        var product = new Service(element)
        product.save((err, p) => {
            if (err)
                console.log(err);
            console.log(p);
        });
    });
}