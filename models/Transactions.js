var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = Schema({
    typeofOperation: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100}
});

//Example about models
//http://micaminomaster.com.co/herramientas-desarrollo/nodejs-projecto-esqueleto-mvc-crud/
module.exports = mongoose.model('Transaction', TransactionSchema);