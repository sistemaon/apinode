'use strict';

const AtomName = 'Loja';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
