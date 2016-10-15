'use strict';

const mongoose = require('mongoose');

const userOrganism = mongoose.model('User');

const create = require('./organelles/create')(userOrganism);
const find = require('./organelles/find')(userOrganism);
const findOne = require('./organelles/findOne')(userOrganism);
const update = require('./organelles/update')(userOrganism);
const remove = require('./organelles/remove')(userOrganism);

const userCell = {
  create,
  find,
  findOne,
  update,
  remove
};

module.exports = userCell;
