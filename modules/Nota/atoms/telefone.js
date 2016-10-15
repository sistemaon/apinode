'use strict';

const AtomName = 'Telefone';

module.exports = {
  type: String,
  validate: require('./../hardrons/validateMongoose')('is' + AtomName)
  //required: true
}
