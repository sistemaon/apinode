'use strict';

const AtomName = 'Descricao';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
