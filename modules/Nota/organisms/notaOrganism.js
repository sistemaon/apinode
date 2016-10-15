'use strict';

const mongoose = require('mongoose');

const notaOrganism = mongoose.model('Nota');

const create = require('./organelles/create')(notaOrganism);
const find = require('./organelles/find')(notaOrganism);
const findOne = require('./organelles/findOne')(notaOrganism);
const update = require('./organelles/update')(notaOrganism);
const remove = require('./organelles/remove')(notaOrganism);

const notaCell = {
  create,
  find,
  findOne,
  update,
  remove
};

module.exports = notaCell;
