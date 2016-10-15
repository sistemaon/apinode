'use strict';

const AtomName = 'SomaLiquido';

module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
