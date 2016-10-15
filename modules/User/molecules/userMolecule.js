const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchemaMolecule = {

  email: require('./../atoms/email')
, password: require('./../atoms/password')

};

module.exports = new Schema(userSchemaMolecule);
