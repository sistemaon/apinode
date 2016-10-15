'use strict';

const AtomName = 'TipoAbatimento';

module.exports = {
  type: String,
  validate: require('./../hardrons/validateMongoose')('is' + AtomName)
  //required: true
}
