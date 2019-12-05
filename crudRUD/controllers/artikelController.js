let Artikel = require('../models/artikel');
// Display list of all Authors.
exports.index = function(req, res, next) {
    res.render('index');
};
exports.data_siswa = function(req, res, next) {
    Artikel.find({}, function(err, result) {
        if (err) console.log(err);
        res.render('artikels/data_siswa', {
            data: result
        }); //untuk menampilkan filenya
    });
};


exports.create = function(req, res, next) {
    res.render('artikels/create');
};

exports.create_detail = function(req, res, next) {
    // res.render('articles/creat_article');
    console.log(req.body)
    let artikel = new Artikel(req.body)
    artikel.save(function(err, result) {
        if (err) {
            console.log(err.message)
        } else {
            res.redirect('/artikels/data_siswa') //untuk membuka linknya
        }
    });
};
exports.show = function(req, res, next) {
    let params = req.params;
    Artikel.findOne({ _id: params.artikelId }, function(err, result) {
        res.render('artikels/show', {
            data: result
        });
    });
};
exports.delete = function(req, res, next) {
    let artikelId = req.params.artikelId;
    Artikel.findOneAndDelete({ _id: artikelId }, function(err, artikel) {
        if (err) {
            res.redirect('/artikels?message=Failed delete artikel!');

        } else {
            res.redirect('/artikels/data_siswa?message=Succes delete artikel!');
        }
    })
};


exports.edit = function(req, res, next) {
    let params = req.params;
    Artikel.findOne({ _id: params.artikelId }, function(err, result) {
        res.render('artikels/edit', {
            data: result
        });
    });
};
exports.update_detail = function(req, res, next) {
    Artikel.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/artikels/data_siswa') //untuk membuka linknya
            data: result
        }
    });
};


exports.dashboard = function(req, res, next) {
    Artikel.find({}, function(err, results) {
        if (err) throw err;
        res.render('index', {
            data: results
        });
    });
};