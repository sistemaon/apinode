'use strict';

const AtomName = 'SomaConciliado';

module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
