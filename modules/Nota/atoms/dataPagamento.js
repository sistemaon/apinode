'use strict';

const AtomName = 'DataPagamento';

module.exports = {
  type: Date
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
