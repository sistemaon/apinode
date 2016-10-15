'use strict';

const AtomName = 'Email';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
