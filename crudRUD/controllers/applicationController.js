// Display list artikel
exports.index = function(req, res, next) {
    res.render('index');
};

exports.create = function(req, res, next) {
    res.render('create');
};
exports.create_detail = function(req, res, next) {
    res.render('create_detail');
};
exports.edit = function(req, res, next) {
    res.render('edit');
};
exports.update_detail = function(req, res, next) {
    res.render('update_detail');
};
exports.dashboard = function(req, res, next) {
    res.render('dashboard');
};
exports.data_siswa = function(req, res, next) {
    res.render('data_siswa');
};
exports.delete = function(req, res, next) {
    res.render('delete');
};
exports.show = function(req, res, next) {
    res.render('show');
};