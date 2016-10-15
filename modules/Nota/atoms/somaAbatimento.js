'use strict';

const AtomName = 'SomaAbatimento';

module.exports = {
  type: Number
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
