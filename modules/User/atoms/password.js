'use strict';

const AtomName = 'Password';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
// , required: true
}
