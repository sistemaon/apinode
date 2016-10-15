'use strict';

const AtomName = 'SomaBruto';

module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
