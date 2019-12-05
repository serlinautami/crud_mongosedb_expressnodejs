var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artikelSchema = new Schema({
    nama: { type: String, required: true, max: 100 },
    alamat: { type: String, required: true, max: 100 },
    agama: { type: String, required: true, max: 100 }
});


module.exports = mongoose.model('artikel', artikelSchema);