/**
 * Created by anzubare on 16.12.2016.
 */

exports.render = function (req, res) {
    res.render('index', {
        title: 'MEAN MVC',
        user: JSON.stringify(req.user)
    });
}
