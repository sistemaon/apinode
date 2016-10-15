'use strict';

const AtomName = 'ConcilRede';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
//, required: true
}
