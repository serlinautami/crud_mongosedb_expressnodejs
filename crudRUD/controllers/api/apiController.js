const Artikel = require('../../models/artikel');

exports.list_artikels = function(req, res) {
    Artikel.find({}, function(err, result){
      if(err) throw err;
      res.send(result);
 });
};