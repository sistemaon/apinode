'use strict';

const AtomName = 'Cnpj';

module.exports = {
  type: String
, validate: require('./../hardrons/validateMongoose')('is' + AtomName)
//, required: true
}
