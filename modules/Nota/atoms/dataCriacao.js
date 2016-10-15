'use strict';

const AtomName = 'DataCriacao';

module.exports = {
  type: Date,
  validate: require('./../hardrons/validateMongoose')('is' + AtomName)
  // required: true
}
