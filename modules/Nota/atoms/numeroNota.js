'use strict';

const AtomName = 'NumeroNota';

module.exports = {
  type: String,
  validate: require('./../hardrons/validateMongoose')('is' + AtomName)
  //required: true
}
