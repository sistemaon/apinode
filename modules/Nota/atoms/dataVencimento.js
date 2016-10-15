'use strict';

const AtomName = 'DataVencimento';

module.exports = {
  type: Date
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
