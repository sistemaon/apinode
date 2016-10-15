'use strict';

const AtomName = 'RazaoSocial';

module.exports = {
  type: String,
  validate: require('./../hardrons/validateMongoose')('is' + AtomName)
  //required: true
}
