'use strict';

const AtomName = 'Quantidade';

module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
, required: true
}
