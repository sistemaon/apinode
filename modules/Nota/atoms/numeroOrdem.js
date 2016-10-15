'use strict';

const AtomName = 'NumeroOrdem';
module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
